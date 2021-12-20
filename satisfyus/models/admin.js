class admin {
    constructor() {
        this.id_admin = "";
        this.Nom = "";
        this.Prenom = "";
        this.Adresse = "";
        this.Telephone = "";
        this.Date_Naiss = "";
        this.sexe = "";
        this.Email = "";
        this.MDP1 = "";
        this.MDP2 = "";
        this.Description = "";
        this.Photo = "";
        this.id_utilisateur = "";
      

    }
    static load(data) {
        let ins;
        let tbl = [];
        for (let i = 0; i < data.length; i++) {
            const d = data[i];
            ins = new admin();
            ins.id_admin = d.id_admin;
            ins.Nom = d.Nom;
            ins.Prenom = d.Prenom;
            ins.Adresse = d.Adresse;
            ins.Telephone = d.Tel;
            ins.Date_Naiss = d.Date_Naiss;
            ins.sexe = d.sexe;
            ins.Email = d.Email;
            ins.MDP1 = d.MDP;
            ins.MDP2 = d.MDP;
            ins.Description = d.Description;
            ins.Photo = d.Photo;
            ins.id_utilisateur = d.id_utilisateur;
            tbl.push(ins)
        }

        return tbl;
    }
    Vide() {
        if (this.Nom == "" || this.Prenom == "" || this.Adresse == "" || this.Telephone == "" || this.Email == "" || this.MDP1 == "" || this.Description == "")
            return true;
        else return false;


    }
    confirmationpassword() {
        if (this.MDP1 == this.MDP2) return true;
        else return false;
    }
    Chiffre()
    {
        for(let i=0;i<this.Telephone.length;i++)
        {
            if((this.Telephone[i]<'0')||(this.Telephone[i]>'9'))
            {
                return true;
            }
        }
        return false;
    }
    length_8()
    {
        if(this.Telephone.length!=8)
        {
            return true;
        }
        else  return false;

    }
}

export {admin};