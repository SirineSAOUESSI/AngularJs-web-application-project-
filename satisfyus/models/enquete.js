class enquete {
    constructor() {
        this.id_enquete = "";
        this.Label = "";
        this.Titre = "";
        this.Description = "";
        this.Date_creation="" ;
        this.Type = "";
        this.id_question = "";
        this.id_client = "";

    }
    static load(data) {
        let ins;
        let tbl = [];
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            ins = new enquete();
            ins.id_enquete = d.id_enquete;
            ins.Label = d.Label;
            ins.Titre = d.Titre;
            ins.Description = d.Description;
            ins.Date_creation = d.Date_creation;
            ins.Type = d.Type;
            ins.id_question = d.id_question;
            ins.id_client = d.id_client;
            tbl.push(ins)
        }

        return tbl;
    }
}

export {enquete};