import Image from "next/image";
import foot from "../../../imgs/foot3.jpg";
export default function AboutRefs() {
  return (
    <div className="about-refs-box">
      <h1 className="about-refs-title d-flex justify-content-center">
        So,What is Reflexology?
      </h1>
      <div className="row">
        <div className="col-md-8 refs-info-div ">
          Reflexology is a holistic method of diagnosis and treatment that uses
          massage and pressure on the feet and hands. The word reflexology is
          derived from the term reflex, return, because it is based on processes
          of response to stimulation. There is evidence of the use of
          reflexology already in ancient times, for example, in wall paintings
          in the pyramids in Egypt, as well as in China, India and Indian tribes
          in America. Modern reflexology was developed by Eunice Hingham in the
          1940s and it was popularized in the United States and from there it
          moved around the world.
          <br></br>
          <br></br>
          In the feet there is a representation of the whole body. By pressing
          on the reflex points, you can influence the body's organs and systems.
          Hence the second meaning of the word reflexology, reflection,
          reflection of the body in the feet. The existing reflection, the right
          foot represents the right part of the body, the left foot represents
          the left part of the body, when There is a spine.
        </div>
        <div className="col-md-4  ">
          <Image
            className="refs-img"
            src={foot}
            width={450}
            height={400}
            alt="refs img"
          ></Image>
        </div>
      </div>
    </div>
  );
}
