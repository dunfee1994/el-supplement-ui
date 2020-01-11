import ElSupCheckboxDropdown from '../packages/checkbox-dropdown/index.js';
import ElSupTreeTransfer from '../packages/tree-transfer/index.js';

const components = [
    ElSupCheckboxDropdown,
    ElSupTreeTransfer
];

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

export {
    ElSupCheckboxDropdown,
    ElSupTreeTransfer
};

export default {
    version: "1.0.2",
    install,
    ElSupCheckboxDropdown,
    ElSupTreeTransfer
};