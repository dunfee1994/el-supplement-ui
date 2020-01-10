import ElSupTreeTransfer from './src/Main.vue';

/* istanbul ignore next */
ElSupTreeTransfer.install = function(vue) {
    Vue.component(ElSupTreeTransfer.name, ElSupTreeTransfer);
};

export default ElSupTreeTransfer;