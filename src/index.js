import CheckboxDropDown from '../packages/checkbox-dropdown/index.js';
import TreeTransfer from '../packages/tree-transfer/index.js';

const components = [
    CheckboxDropDown,
    TreeTransfer
];

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

export {
    CheckboxDropDown,
    TreeTransfer
};

export default {
    version: "1.0.2",
    install,
    CheckboxDropDown,
    TreeTransfer
};