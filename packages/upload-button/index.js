import ElSupUploadButton from './src/Main.vue';

/* istanbul ignore next */
ElSupUploadButton.install = function(vue) {
    Vue.component(ElSupUploadButton.name, ElSupUploadButton);
};

export default ElSupUploadButton;