class Button {
    render() { }
}

class Window {
    render() { }
}

class LightButton extends Button {
    render() {
        return "Botão branco criado";
    }
}

class DarkButton extends Button {
    render() {
        return "Botão preto criado";
    }
}

class LightWindow extends Window {
    render() {
        return "Janela clara aberta";
    }
}

class DarkWindow extends Window {
    render() {
        return "Janela escura aberta";
    }
}

class UIThemeFactory {
    createButton() { }
    createWindow() { }
}

class LightThemeFactory extends UIThemeFactory {
    createButton() {
        return new LightButton();
    }
    createWindow() {
        return new LightWindow();
    }
}

class DarkThemeFactory extends UIThemeFactory {
    createButton() {
        return new DarkButton();
    }
    createWindow() {
        return new DarkWindow();
    }
}

function getUIComponents(theme) {
    let factory;

    if (theme === "light") {
        factory = new LightThemeFactory();
    } else if (theme === "dark") {
        factory = new DarkThemeFactory();
    }

    const button = factory.createButton();
    const windowUI = factory.createWindow();

    return { button, windowUI };
}

const theme = "dark";
const { button, windowUI } = getUIComponents(theme);

console.log(button.render());
console.log(windowUI.render());
