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
#### オプション
- --rm: コンテナを停止すると，コンテナを削除します．
- -p: コンテナのポート番号とcappuccinoのポート番号を紐づけます(9000:3000は，コンテナ内のポート3000番とcappuccinoのポート番号9000番を紐づけます)
- -d: バックグラウンドで実行
```
docker run --rm -p 9000:3000 -d fk/dialogue_system_front:1.0.0
```

#### step2: フロントエンドのコンテナ作成

#### step3: フロントエンドのイメージ作成

#### step3: フロントエンドのコンテナ作成

### iMac(研究室内のホスト)
