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

#### step2: フロントエンドのコンテナ作成

#### step3: フロントエンドのイメージ作成

#### step3: フロントエンドのコンテナ作成

### iMac(研究室内のホスト)
