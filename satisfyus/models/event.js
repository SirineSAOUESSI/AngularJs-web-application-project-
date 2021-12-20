class event {
    constructor() {
        this.id_event = "";
        this.title = "";
        this.jour_intervention = "";
        this.mois_intervention = "";
        this.dates_intervention = "";
        this.heure_debut = "";
        this.heure_fin = "";
        this.id_enquete="" ;
      

    }
    static load(data) {
        let ins;
        let tbl = [];
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            ins = new event();
            ins.id_event = d.id_event;
            ins.title = d.title;
            ins.jour_intervention = d.jour_intervention;
            ins.mois_intervention = d.mois_intervention;
            ins.dates_intervention = d.dates_intervention;
            ins.heure_debut = d.heure_debut;
            ins.heure_fin = d.heure_fin;
            ins.id_enquete = d.id_enquete;

            tbl.push(ins)
        }

        return tbl;
    }
}

export {event};