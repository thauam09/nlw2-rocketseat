import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/48227700?s=460&v=4" alt="Thauã Martins"/>
        <div>
          <strong>Thauã Martins</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh neque, malesuada blandit sagittis et, fermentum sit amet erat. Vestibulum dictum dapibus risus sed volutpat. In dolor arcu, vulputate sed sagittis id, sodales in metus. Sed tempus mi vitae commodo elementum. Quisque auctor eu elit vel tempor. Sed consequat nunc in nisl accumsan fringilla.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;