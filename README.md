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
docker run --rm -p 9001:9001 -d opencampus/dialogue_system_backend:1.0.0
```

### iMac(研究室内のホスト)
計算機サーバーと宮森研究室内は同じネットワークにはありません．
ポートフォワーディングを利用してデータのやり取りをします．
宮森研究室内のホスト(iMac)でターミナルを開きます．

### フロントエンドとのやり取り
フロントエンドのコンテナとやり取りをします(公開鍵暗号をしていないとパスワードを求められるかもしれません)．
コマンドを実行すると，http://localhost:9000にアクセスすると，cappuccino3000番ポートと通信できます．
ctrl+dで終了することができます．
```
ssh keito_fukuoka@cappuccino -L 9000:localhost:3000
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
