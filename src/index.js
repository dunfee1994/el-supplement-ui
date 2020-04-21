import ElSupCheckboxDropdown from '../packages/checkbox-dropdown/index.js';
import ElSupTreeTransfer from '../packages/tree-transfer/index.js';
import ElSupUploadButton from '../packages/upload-button/index.js';

const components = [
    ElSupCheckboxDropdown,
    ElSupTreeTransfer,
    ElSupUploadButton
];

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

export {
    ElSupCheckboxDropdown,
    ElSupTreeTransfer,
    ElSupUploadButton
};

export default {
    version: "1.2.2",
    install,
    ElSupCheckboxDropdown,
    ElSupTreeTransfer,
    ElSupUploadButton
};