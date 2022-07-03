import React from "react";
import { Link } from "react-router-dom";

export const NoteList = () => {
  return (
    <div className="bg-white container vh-100">
      <div className="row flex justify-content-center h-100">
        <div className="col-7 bg-light p-5">
          <div classname="d-flex justify-content-between">
            <Link to="/dashboard" className="text-decoration-none text-secondary">
              <i class="bi bi-arrow-left"></i>
            </Link>

            <h4 className="border-bottom mb-2">Title</h4>
          </div>
          <p className="note-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            iure, recusandae provident dolor eum ullam perferendis repellendus
            ipsa veritatis, laboriosam saepe exercitationem blanditiis natus
            expedita nulla animi dicta accusantium doloribus repellat, ex quos
            optio non? Aperiam alias recusandae corporis esse, vitae sint
            impedit, earum quis nesciunt quidem debitis, voluptates vel? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam
            iusto beatae similique asperiores consequuntur, recusandae
            perspiciatis, magni expedita ad eum odio doloremque ea praesentium,
            voluptates inventore repellat commodi quis! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Blanditiis consequuntur
            repudiandae molestias magnam ipsam quasi excepturi, aut quas in quos
            atque fugit sunt laborum laudantium, voluptatum facere dolor cum
            asperiores eius cumque laboriosam omnis illum cupiditate unde?
            Tempore et odio, at eos deleniti ut sapiente commodi voluptatem,
            dolores assumenda repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
};
