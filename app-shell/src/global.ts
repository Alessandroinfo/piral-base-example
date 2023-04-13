window.componentRegistry = {};
window.registerComponent = (name, component) => {
    const components = window.componentRegistry[name] || [];

    components.push(component);

    window.componentRegistry[name] = components;

    window.dispatchEvent(
        new CustomEvent("component-changed", { detail: { name, components } })
    );
};
