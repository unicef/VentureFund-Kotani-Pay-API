# Using Mac OS

How to set up a local development environment using Mac OS.

Before building with Kotani Pay, you need to set up a development environment to make sure you have the proper tools to build an application. This setup includes a combination of general development tools and Celo specific tools.

### Web2 Prerequisites <a href="#web2-prerequisites" id="web2-prerequisites"></a>

#### Xcode <a href="#xcode" id="xcode"></a>

Xcode is Apple's integrated development environment for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, and tvOS.

While Xcode falls under the Celo Prerequisites, Xcode takes a long time to download, which is why it is first on this list. It's best to start this download first, or even start downloading it before going to bed (depending on your internet connection).

#### Node, NPM and NVM <a href="#node-npm-and-nvm" id="node-npm-and-nvm"></a>

#### Node <a href="#node" id="node"></a>

[Node](https://nodejs.org/en/) is a JavaScript runtime that allows you to execute JS code outside a web browser. It is an open-source server environment and runs on various platforms.

#### NPM <a href="#npm" id="npm"></a>

`npm` stands for Node Package Manager and [is the world's largest software registry](https://docs.npmjs.com/about-npm). npm is what you'll use for installing published JS packages. npm comes bundled with Node, so you won't need to install it separately.

#### NVM <a href="#nvm" id="nvm"></a>

`nvm` stands for Node Version Manager. Different projects often require different versions of Node, and nvm makes it easy to switch between those versions. This is recommended if you plan to develop a lot of JS-based applications and [npm also recommends nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). For Windows users, there are **nodist** and **nvm-windows**.

**Install Node and npm via nvm**

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.0/install.sh | bash
```

Verify the installation by running:

which should output nvm.

You can now install Node with `nvm install <version>`. Celo requires using **Node v12.x**, so you need to install and use that specific version.

```
~ >> nvm install 12Downloading and installing node v12.22.7...Downloading https://nodejs.org/dist/v12.22.7/node-v12.22.7-darwin-x64.tar.xz...######################################################################### 100.0%Computing checksum with sha256sumChecksums matched!Now using node v12.22.7 (npm v6.14.15)
```

#### Homebrew <a href="#homebrew" id="homebrew"></a>

[Homebrew](https://brew.sh/) is a way of managing packages on macOS.

**Install Homebrew**

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Get the latest packages

### Celo Prerequisites <a href="#celo-prerequisites" id="celo-prerequisites"></a>

#### Truffle <a href="#truffle" id="truffle"></a>

Since the Celo Blockchain has shared ancestry with Ethereum and maintains full EVM compatibility, you can use Ethereum tools to develop Celo applications. [Truffle](https://www.trufflesuite.com/truffle) is a development framework for Ethereum and assists with writing your contracts, testing, and deploying.

Similar to how you might use a framework like React instead of vanilla JavaScript, you can use Truffle to abstract away a lot of the imperative details from Solidity (the language used to write smart contracts).

**Install Truffle Version 5.4.0**

Celo works best with truffle version 5.4.0. Install this specific version using the command below.

```
npm install -g truffle@5.4.0
```

If you have worked with Truffle in the past, you may have installed a version that is incompatible with Celo. Use the commands below to uninstall your current version so that you can install truffle version 5.4.0.

Check Truffle Location

```
$ which truffle /usr/local/bin/truffle
```

Remove Existing Installation

```
$ rm -f /usr/local/bin/truffle
```

****

