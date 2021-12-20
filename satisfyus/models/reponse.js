class reponse {
    constructor() {
        this.nbr = "";
        this.value= "";
     
      

    }
    static load(data) {
        let ins;
        let tbl = [];
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            ins = new reponse();
            ins.nbr = d.nbr;
            ins.value = d.value;
         

            tbl.push(ins)
        }

        return tbl;
    }
}

export {reponse};