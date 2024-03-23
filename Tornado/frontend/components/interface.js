import { useState } from "react"
import $u from "../utils/$u"
import { ethers } from "ethers"

const wc = require("../circuit/witness_calculator")

const tornadoAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const tornadoJSON = require("../json/Tornado.json")
const tornadoABI = tornadoJSON.abi
const tornadoInterface = new ethers.utils.Interface(tornadoABI)

const Interface = () => {
    const [account, updateAccount] = useState(null)
    const [proofElements, updateProofElements] = useState(null)

    const connectMetamask = async () => {
        try {
            if (!window.ethereum) {
                alert("Please install Metamask to use this app.")
                throw "no-metamask"
            }

            var accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            var chainId = window.ethereum.networkVersion
            var activeAccount = accounts[0]
            var balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [activeAccount, "latest"],
            })
            balance = $u.moveDecimalLeft(ethers.BigNumber.from(balance).toString(), 18)

            var newAccountState = {
                chainId: chainId,
                address: activeAccount,
                balance: balance,
            }
            updateAccount(newAccountState)
        } catch (e) {
            console.log(e)
        }
    }

    const depositEther = async () => {
        // generate secret, nullifier
        const secret = ethers.BigNumber.from(ethers.utils.randomBytes(32)).toString()
        const nullifier = ethers.BigNumber.from(ethers.utils.randomBytes(32)).toString()

        const input = {
            secret: $u.BN256ToBin(secret).split(""),
            nullifier: $u.BN256ToBin(nullifier).split(""),
        }

        var res = await fetch("/deposit.wasm")
        var buffer = await res.arrayBuffer()
        var depositWC = await wc(buffer)

        const r = await depositWC.calculateWitness(input, 0)

        const commitment = r[1]
        const nullifierHash = r[2]

        const value = ethers.BigNumber.from("1000000000000000000").toHexString()

        const tx = {
            to: tornadoAddress,
            from: account.address,
            value: value,
            data: tornadoInterface.encodeFunctionData("deposit", [commitment]), // calldata
        }
        console.log("commitment is:", commitment)
        console.log("nullifierHash is", nullifierHash)

        try {
            const txHash = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [tx],
            })
            const receipt = await window.ethereum.request({
                method: "eth_getTransactionReceipt",
                params: [txHash],
            })
            const log = receipt.logs[0]

            const decodedData = tornadoInterface.decodeEventLog("Deposit", log.data, log.topics)
            console.log("decodeData is:", decodedData)

            const proofElements = {
                root: $u.BNToDecimal(decodedData.root),
                nullifierHash: `${nullifierHash}`,
                secret: secret,
                nullifier: nullifier,
                commitment: `${commitment}`,
                hashPairings: decodedData.hashPairings.map((n) => $u.BNToDecimal(n)),
                hashDirections: decodedData.hashDirections,
            }

            updateProofElements(btoa(JSON.stringify(proofElements)))
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            {!!account ? (
                <div>
                    <p>chainId: {account.chainId}</p>
                    <p>Wallet Address: {account.address}</p>
                    <p>Balance: {account.balance}</p>
                </div>
            ) : (
                <div>
                    <button onClick={connectMetamask}>Connect Metamask</button>
                </div>
            )}

            <div>
                <hr />
            </div>

            {!!account ? (
                <div>
                    {!!proofElements ? (
                        <div>
                            <p>{proofElements}</p>
                        </div>
                    ) : (
                        <button onClick={depositEther}>Deposit 1 ETH</button>
                    )}
                </div>
            ) : (
                <div>
                    <p>You need to connect Metamask to use this section.</p>
                </div>
            )}
        </div>
    )
}

export default Interface
