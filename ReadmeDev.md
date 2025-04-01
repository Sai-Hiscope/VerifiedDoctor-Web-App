# Managing Dependencies in React & React Native Using `requirements.txt`

## Overview
Normally, React and React Native projects manage dependencies using `package.json`. However, some developers prefer a `requirements.txt` approach (similar to Python) to maintain a simple dependency list.

This guide explains how to:
- Create and use `requirements.txt` in a React or React Native project.
- Automate dependency installation using a custom script in `package.json`.
- Ensure compatibility with Windows, macOS, and Linux.

---

## Step 1: Create `requirements.txt`
In your project root, create a file named **`requirements.txt`** and list your dependencies:

```
react-router-dom@latest
axios@latest
tailwindcss@latest
```
For React Native, you can include packages like:

```
react-native-gesture-handler@latest
react-native-reanimated@latest
react-navigation@latest
```

---

## Step 2: Add a Script to `package.json`
Edit your `package.json` and add the following inside the **`scripts`** section:

```json
"scripts": {
  "install:reqs": "node -e \"require('fs').readFileSync('requirements.txt', 'utf8').split('\\n').forEach(d => d && console.log(require('child_process').execSync('npm install ' + d, {stdio: 'inherit'})))\""
}
```

---

## Step 3: Install Dependencies
Now, install all dependencies listed in `requirements.txt` using:
```sh
npm run install:reqs
```

For **React Native**, you may also need to run:
```sh
npx pod-install
```
(for iOS apps on macOS).

---

## Alternative (Manual Installation)
If you prefer not to modify `package.json`, use:
- **Linux/macOS:**
  ```sh
  xargs npm install < requirements.txt
  ```
- **Windows (PowerShell):**
  ```powershell
  Get-Content requirements.txt | ForEach-Object { npm install $_ }
  ```

---

## Why Use This Approach?
✅ **Simplifies dependency management** – especially in large teams.
✅ **Keeps dependencies organized** – separate from `package.json`.
✅ **Works across React & React Native**.
✅ **One command installation** – `npm run install:reqs`.

Would you like additional automation, such as checking for missing dependencies? Feel free to contribute and improve this workflow! 🚀

