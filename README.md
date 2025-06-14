Projet de gestion d'arrosage de plantes (Fullstack ver C#) utilisant :

* **Frontend** : React
* **Backend** : ASP.NET Core Web API

---

## 🔧 Installation & Lancement

### 🚀 Cloner le projet

```bash
git clone https://github.com/RivennSubaru/dotNet-Arroseo.git
cd dotNet-Arroseo
```

---

### 👥 Backend (ASP.NET Core)

#### Prérequis :

* .NET 8 SDK : [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
* Visual Studio ou Visual Studio Code

#### Étapes d'installation :

1. Aller dans le dossier Arroseo (là où se trouve le fichier `.csproj`)

```bash
cd Arroseo
```

2. Restaurer les dépendances NuGet

```bash
dotnet restore
```

3. Lancer le serveur backend

```bash
dotnet run
```

> Le serveur sera généralement accessible via :
>
> * [https://localhost:7155](https://localhost:7155)

---

### 💻 Frontend (React)

1. Aller dans le dossier frontend :

```bash
cd Frontend
```

2. Installer les dépendances :

```bash
# Avec npm
npm install

# ou avec pnpm
pnpm install

# ou avec bun
bun install
```

3. Lancer le serveur de développement :

```bash
# Avec npm
npm run dev

# ou avec pnpm
pnpm dev

# ou avec bun
bun dev
```

4. L'application sera disponible sur :

```
http://localhost:5173
```

---

## ⚠ Remarque importante

* Si le frontend et le backend tournent sur des ports différents, pense à autoriser le CORS sur ASP.NET Core.
* Les dossiers `bin/`, `obj/` et autres fichiers temporaires sont ignorés dans Git grâce au fichier `.gitignore`. Les packages seront restaurés automatiquement via `dotnet restore`.

---

## 📚 Technologies

* ASP.NET Core 8 (Web API)
* Entity Framework Core
* React 19
