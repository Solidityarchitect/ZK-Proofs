import { useState } from "react"
import $u from "../utils/$u"
import { ethers } from "ethers"

const Interface = () => {
    const [account, updateAccount] = useState(null)

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
                    <button onClick={depositEther}>Deposit 1 ETH</button>
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
