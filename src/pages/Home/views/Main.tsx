import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { SectionHomePage } from "../styled-components/SectionHomePage.styled";
import { SuscriptionHomePage } from "../components/SuscriptionHomePage";
import { faqContent, sectionContent } from "@/data";
import styles from "@/assets/styles/Home/MainHomePage.module.css";

export const Main = () => {
  return (
    <main style={{ backgroundColor: "#000" }}>
      {/*  <Input placeholder="hola"/> */}
      
      {sectionContent.map((item) => (
        <div style={{ borderBottom: "0.8rem solid #222" }} key={item.title}>
          <SectionHomePage reverse_item={item.reverse_item}>
            <div className="text_content">
              <h1 className="title">{item.title}</h1>
              <p className="paragraph">{item.body}</p>
            </div>

            <div className="media">
              <img src={item.src} alt={item.title} className="img_section" />

              {item.content && (
                <div className={"section_stranger"}>
                  <img
                    className={"image_section_stranger"}
                    src="img/boxshot.png"
                    alt=""
                  />

                  <div className="text_section_stranger">
                    <p className={"text_title_section_stranger"}>
                      Stranger Things
                    </p>
                    <p className={"text_download_section_stranger"}>
                      Descargando...
                    </p>
                  </div>

                  <img
                    className={"image2_section_stranger"}
                    src="img/download-animation.gif"
                    alt=""
                  />
                </div>
              )}
            </div>
          </SectionHomePage>
        </div>
      ))}

      <div style={{ borderBottom: "0.8rem solid #222" }}>
        <div className={styles.faq}>
          <h1 className={styles.faq_title}>Preguntas frecuentes</h1>

          <Accordion allowZeroExpanded>
            {faqContent.map((item, i) => (
              <AccordionItem key={i}>
                <AccordionItemHeading>
                  <AccordionItemButton>{item}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                    ut nostrud velit in irure cillum tempor laboris sed
                    adipisicing eu esse duis nulla non. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Aut tempora praesentium
                    provident saepe temporibus magni tempore, accusantium
                    dolorem assumenda reiciendis maxime vitae expedita.
                    Perferendis illum est illo voluptatem? Hic, distinctio?
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div
          className="container"
          style={{
            color: "#FFF",
            padding: "4rem 0 9rem 0",
            fontSize: "2rem",
          }}
        >
          <SuscriptionHomePage small />
        </div>
      </div>
    </main>
  );
};
