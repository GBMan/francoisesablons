class DatasHolder {
    constructor(datas=null) {
        if (DatasHolder.instance == null) {
            this.datas = datas;
            this.instance = this;
        }
        return DatasHolder.instance;
    }

    getDatas() {
        return this.datas;
    }
    setDatas(datas) {
        this.datas = datas;
    }

    print() {
        console.log(this.datas);
    }
}

const datas = new DatasHolder();
Object.freeze(datas);
export default datas;