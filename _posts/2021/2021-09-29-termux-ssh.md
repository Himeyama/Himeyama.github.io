---
title: termux に ssh する
layout: post
date: '2021-09-29 05:11'
---

# OpenSSH のインストール

```bash
pkg install openssh
```

## エラーが出る場合

Github から termux をインストールすることをおすすめします。(詳細は後日)

Google Play 版で続行したい場合は、以下を。

```bash
termux-change-repo
# 3つすべて選択して OK
# Mirrors by Grimler を選択して OK
```

リポジトリーを別のものに設定して、
openssh のインストールを再試行する。

# サーバーの起動
```bash
sshd
```

# 公開鍵の設定
クライアントの公開鍵 (`~/.ssh/id_*.pub`) を
termux の `~/.ssh/authorized_keys` に追加する。

公開鍵はメールで自分宛てに送ったり、twitter の DM で自分宛てに送ったりして、コピペすると楽。

```sh
# 例:
echo ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKYztjZfIVMl5o0J2DrigTsl1XgbSKMUgYCpfOfhMtmw hikari@B450M-K >> ~/.ssh/authorized_keys
```

# ログイン
```bash
# スマホの ip アドレスを確認
ip a

ssh 192.168.x.x -p 8022
```

