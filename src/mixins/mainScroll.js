export default function (refValue) {
    return {
        mounted() {
            
            this.$bus.$on("setMainScroll", this.setMainScrollTop);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
        },
        beforeDestroy() {
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off("setMainScroll", this.setMainScrollTop);
            this.$bus.$emit("mainScroll");
        },
        methods: {
            handleScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue]);
            },
            setMainScrollTop(top) {
                this.$refs[refValue].scrollTop = top;
            },
        },
    }
}