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
リポジトリーがないとかでエラーが出る。

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

```sh
echo ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKYztjZfIVMl5o0J2DrigTsl1XgbSKMUgYCpfOfhMtmw hikari@B450M-K >> ~/.ssh/authorized_keys
```

# ログイン
```bash
ip a
ssh 192.168.x.x -p 8022
```

