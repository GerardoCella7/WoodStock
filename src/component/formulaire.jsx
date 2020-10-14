import React from 'react';

const Formulaire = () => {
    return (
        <form action="" method="post">
            <h2>CONTACT US</h2>
            <div>
                <input type="text" name="firstname" id="firstname" placeholder="FIRST NAME"/>
                <input type="text" name="lastname" id="lastname" placeholder="LAST NAME"/>
                <input type="email" name="email" id="email" placeholder="MAIL ADRESS"/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="MESSAGE"></textarea>
            </div>
        </form>
    );
};

export default Formulaire;