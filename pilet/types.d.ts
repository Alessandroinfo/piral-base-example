export {};

declare global {
    interface Window {
        registerComponent: function(name, component);
    }
}
