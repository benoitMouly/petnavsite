import React from 'react';
import { Typography, Paper } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Paper style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
      L'utilisation de l'application PetNav : PetNav ne nécessite pas de créer un compte, ni de transmettre d'informations permettant de vous identifier.

Dans le cas où vous l'avez autorisé, PetNav récupère votre position pour seule et unique donnée personnelle vous concernant. Celle-ci sert uniquement à afficher les lieux autour de vous et à calculer leur distance. Elle n'est jamais transmise à des tiers ni associée à un quelconque moyen permettant de vous identifier.

L'application utilise AdMob (par Google) afin d'afficher des publicités qui permettent de la financer partiellement. AdMob et ses partenaires peuvent utiliser des cookies et certaines données personnelles à des fins d'analyse, de statistiques, et pour vous proposer les publicités les plus susceptibles de vous intéresser. Vous pouvez vous opposer, lors du premier lancement de l'application, et par la suite sur la page "Profile", à une telle utilisation de vos données personnelles. Cela ne désactivera pas les publicités mais les rendra simplement moins pertinentes.
      <br/>
      <br/>
      Vous pouvez supprimer toutes vos données et toutes vos traces en allant sur l'onglet "Profil", et "Supprimer mon compte".
      
      </Typography>
    </Paper>
  );
}

export default PrivacyPolicy;
