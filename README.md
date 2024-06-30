# キャラクター対話システム
キャラクターとメッセージのやり取りをすることができます．

## ディレクトリ構成
```
.
├── backend
│   ├── Dockerfile
│   ├── chatbot.py
│   ├── gozaru-lora
│   │   ├── README.md
│   │   ├── adapter_config.json
│   │   ├── adapter_model.safetensors
│   │   ├── optimizer.pt
│   │   ├── rng_state.pth
│   │   ├── scheduler.pt
│   │   ├── special_tokens_map.json
│   │   ├── spiece.model
│   │   ├── tokenizer_config.json
│   │   ├── trainer_state.json
│   │   └── training_args.bin
│   └── requirements.txt
└── frontend
    ├── Dockerfile
    ├── app
    │   ├── chatbot
    │   │   └── page.tsx
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── chatbot
    │   │   ├── CloseIcon.tsx
    │   │   ├── Header.tsx
    │   │   ├── SendMessage.tsx
    │   │   ├── SystemMessage.tsx
    │   │   └── UserMessage.tsx
    │   └── home
    │       ├── Footer.tsx
    │       ├── Header.tsx
    │       ├── HomeImage.tsx
    │       └── StartButton.tsx
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── utils
        ├── datatime.ts
        ├── filesystem.ts
        ├── math.ts
        └── messageConnection.ts
```

## 準備

### 画像をダウンロード

IZUMOさんによって提供されているAilisを使わせていただいてます．
[こちら](https://izumo.com/)からダウンロードし，以下のディレクトリに画像を配置してください．
ライセンスは各自で確認するようにお願いします．

```
frontend/public
├── Ailis-Sticker
│   ├── Angry.png
│   ├── Blush.png
│   ├── Bow.png
│   ├── Brawny.png
│   ├── Bye.png
│   ├── Cantwait.png
│   ├── Chuckle.png
│   ├── Congrats.png
│   ├── Dizzy.png
│   ├── Done.png
│   ├── Excited.png
│   ├── FOMO.png
│   ├── Goodluck.png
│   ├── Goodmorning.png
│   ├── Goodnight.png
│   ├── HODL.png
│   ├── Hehe.png
│   ├── Hehe_ background.png
│   ├── Hi.png
│   ├── KAWAII.png
│   ├── LFG.png
│   ├── NO.png
│   ├── NP.png
│   ├── OK.png
│   ├── OMG.png
│   ├── OMG_ background.png
│   ├── Oopsie.png
│   ├── Perfect.png
│   ├── Please.png
│   ├── Question.png
│   ├── Scam.png
│   ├── Smirk.png
│   ├── Sob.png
│   ├── Sorry.png
│   ├── Sorry_background.png
│   ├── Soul.png
│   ├── Soul_ background.png
│   ├── Stare.png
│   ├── Surprise.png
│   ├── Sweaty.png
│   ├── Thankyou.png
│   ├── Thinking.png
│   ├── Thumbsup.png
│   ├── Wen.png
│   ├── Whale.png
│   └── Yay.png
├── Far_view
│   ├── 001_fullbody.png
│   ├── 002_fullbody.png
│   ├── 003_fullbody.png
│   ├── 004_fullbody.png
│   ├── 005_fullbody.png
│   ├── 006_fullbody.png
│   ├── 007_fullbody.png
│   ├── 008_fullbody.png
│   ├── 009_fullbody.png
│   ├── 010_fullbody.png
│   ├── 011_fullbody.png
│   ├── 012_fullbody.png
│   ├── 013_fullbody.png
│   ├── 014_fullbody.png
│   ├── 015_fullbody.png
│   ├── 016_fullbody.png
│   ├── 017_fullbody.png
│   ├── 018_fullbody.png
│   ├── 019_fullbody.png
│   ├── 020_fullbody.png
│   ├── 021_fullbody.png
│   ├── 022_fullbody.png
│   ├── 023_fullbody.png
│   ├── 024_fullbody.png
│   ├── 025_fullbody.png
│   ├── 026_fullbody.png
│   ├── 027_fullbody.png
│   ├── 028_fullbody.png
│   ├── 029_fullbody.png
│   ├── 030_fullbody.png
│   ├── 031_fullbody.png
│   ├── 032_fullbody.png
│   ├── 033_fullbody.png
│   ├── 034_fullbody.png
│   ├── 035_fullbody.png
│   ├── 036_fullbody.png
│   ├── 037_fullbody.png
│   ├── 038_fullbody.png
│   ├── 039_fullbody.png
│   ├── 040_fullbody.png
│   ├── 041_fullbody.png
│   ├── 042_fullbody.png
│   ├── 043_fullbody.png
│   └── 044_fullbody.png
└── ailis-icon.png
```

### 計算機サーバー
今回はcappuccinoを例に説明をします．
cappuccinoのサーバー内でこのリポジトリをクローンします．
```
git clone https://github.com/ke-110/dialogue_system.git
```

#### step1: フロントエンドのイメージ作成
クローンしてきたリポジトリ内のfrontendディレクトリに移動します．
frontendのイメージを作成します．
オプション
- -t: イメージに対するタグ付け(必須ではありませんが，つけることを推奨します)
```
docker build . -t opencampus/dialogue_system_front:1.0.0
```

#### step2: フロントエンドのコンテナ作成
フロントエンドのコンテナを作成します．
#### オプション
- --rm: コンテナを停止すると，コンテナを削除します．
- -p: コンテナのポート番号とcappuccinoのポート番号を紐づけます(9000:3000は，コンテナ内のポート3000番とcappuccinoのポート番号9000番を紐づけます)
- -d: バックグラウンドで実行
```
docker run --rm -p 9000:3000 -d opencampus/dialogue_system_front:1.0.0
```

#### step3: バックエンドのイメージ作成
次にクローンしてきたリポジトリ内のbackendディレクトリに移動します．
バックエンドのイメージを作成します．
```
docker build . -t opencampus/dialogue_system_backend:1.0.0
```

#### step4: バックエンドのコンテナ作成
バックエンドのコンテナを作成します．
バックエンドでは言語モデルをダウンロードするため，コンテナを止めるごとに削除してしまうと，コンテナ作成に時間がかかります．
次に使うまでに期間があるなら，オプション--rmを使うことをおすすめします．
```
docker run --rm -p 9001:9001 -d --gpus device=0 opencampus/dialogue_system_backend:1.0.0
```

### iMac(研究室内のホスト)
計算機サーバーと宮森研究室内は同じネットワークにはありません．
ポートフォワーディングを利用してデータのやり取りをします．
宮森研究室内のホスト(iMac)でターミナルを開きます．

### フロントエンドとのやり取り
フロントエンドのコンテナとやり取りをします(公開鍵暗号をしていないとパスワードを求められるかもしれません)．
コマンドを実行すると，http://localhost:9000 にアクセスすると，cappuccino9000番ポートと通信できます．
ctrl+dで終了することができます．
```
ssh keito_fukuoka@cappuccino -L 9000:localhost:9000
```

### バックエンドとのやり取り
新しくターミナルを開いてください．
コマンドを実行すると，ホストの9001番ポートにアクセスすると，cappuccino9001番ポートと通信できます．
ctrl+dで終了することができます．
```
ssh keito_fukuoka@cappuccino -L 9001:localhost:9001
```

## webサイトにアクセスする
http://localhost:9000 にアクセスすることで，試すことができます．

## その他
- 左下にエラーが出ますが，計算機サーバー内とホスト側で時刻があっていないためエラーが出ます．

## クレジット
- Fan creation of Ailis by IZUMO.com
