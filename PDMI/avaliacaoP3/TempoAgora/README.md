# Tempo Agora

**Tempo Agora** é um aplicativo React Native com TypeScript, construído usando Expo Go, que exibe informações climáticas simuladas de maneira clara, moderna e responsiva.

🔗 Repositório: [github.com/andreflavio/avaliacaoP3andre](https://github.com/andreflavio/avaliacaoP3andre)

---

## 📱 Funcionalidades

- 🌡️ Exibe temperatura atual, umidade, velocidade do vento e condição do clima.
- 🧱 Cartões com efeitos de sombra (shadow tree) para melhor visual.
- 🔗 Botão "Mais Informações" que abre o site da ClimaTempo usando `Linking.openURL()`.
- ⚛️ Utiliza hooks `useState` e `useEffect` para simular carregamento de dados.
- 🧩 Estrutura modular: `/components`, `/assets`, `/screens`.
- 📱 Funciona perfeitamente com Expo Go, sem configurações complexas.
- ✨ Desenvolvido 100% em TypeScript para tipagem segura e clara.

---

## 🛠️ Instalação

```bash
# Clone este repositório
git clone https://github.com/andreflavio/avaliacaoP3andre.git
cd avaliacaoP3andre

# Instale as dependências
npm install

# Corrija possíveis vulnerabilidades
npm audit fix
```

````

---

## ▶️ Execução

```bash
npx expo start
```

- 📲 Escaneie o QR Code com o app **Expo Go** no seu Android ou iOS.
- 🖥️ No terminal, pressione:

  - `a` para abrir no emulador Android.
  - `i` para abrir no simulador iOS (somente macOS).

---

## 📦 Principais Dependências

| Pacote                                   | Descrição                        |
| ---------------------------------------- | -------------------------------- |
| `expo`                                   | Framework base do app            |
| `react-native`                           | Estrutura do aplicativo nativo   |
| `react-native-shadow-2` (ou shadow tree) | Efeito sombra para componentes   |
| `react-native-vector-icons`              | Ícones modernos e flexíveis      |
| `typescript`                             | Tipagem estática robusta         |
| `@types/react`, `@types/react-native`    | Tipagem para React Native com TS |

---

## 📁 Estrutura de Pastas

```
TempoAgora/
├── assets/
│   ├── icon.png
│   └── splash.png
├── components/
│   └── WeatherCard.tsx
├── screens/
│   └── HomeScreen.tsx
├── App.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📝 Notas Adicionais

- 🔄 Os dados climáticos são **simulados** ao iniciar o app.
- 💡 Sombra aplicada para melhorar a experiência do usuário.
- 🔗 Botão direciona o usuário para o ClimaTempo.
- 🔒 Tipagem TypeScript melhora confiabilidade e manutenção.
- 🧹 Recomenda-se rodar `npm audit fix` após `npm install`.

---

## 📌 Licença

Este projeto é **open-source**. Modifique, contribua e use como quiser!
Feito com 💙 por [André Flávio de Oliveira](https://github.com/andreflavio)

````
