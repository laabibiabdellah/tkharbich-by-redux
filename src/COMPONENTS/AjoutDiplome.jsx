import { useDispatch } from "react-redux";
import { ajt } from "../STORE/redux";
import { useState } from "react";

export default function AjoutDiplome() {
  const [intiuleDiplome, setIntiuleDiplome] = useState();
  const [nomEtablissement, setNomEtablissement] = useState();
  const dispatch = useDispatch();

  const stateData = {
    intiuleDiplome,
    nomEtablissement,
  };

  const send = (e) => {
    e.preventDefault();
    dispatch(ajt(stateData));
  };

  return (
    <div className="ajt">
      <label>Intiule Diplome:</label>
      <input
        type="text"
        placeholder="entrer Intiule Diplome"
        required
        onChange={(e) => setIntiuleDiplome(e.currentTarget.value)}
      />
      <label>Nom Etablissement:</label>
      <input
        type="text"
        placeholder="entrer Nom Etablissement"
        required
        onChange={(e) => setNomEtablissement(e.currentTarget.value)}
      />

      <button onClick={send}>Ajouter</button>
    </div>
  );
}
