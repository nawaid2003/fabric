import React, { useEffect } from "react";
import "./App.css";
import "./Script.js";
import ScrollVisibility from "./ScrollVisibility";
import HideOnScroll from "./hideOnScroll";
import TransFormImage from "./TranfromImage.js";
function App() {
  useEffect(() => {
    // Set initial opacity to 1 for all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.style.opacity = "1";
    });

    // Reset transforms for text elements only
    const textElements = document.querySelectorAll(".block");
    textElements.forEach((element) => {
      element.style.transform = "none";
      element.style.opacity = "1";
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "black" }}>
        <div className="z-[21] relative" style={{ color: "white" }}>
          <div id="section-0" class="h-[2px]"></div>
          <section
            class="flex relative z-[2] justify-between items-center h-[100svh] w-full overflow-hidden"
            // style={{ opacity: "0" }}
          >
          
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  className="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(-20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/5cpwY2u4TvtM0JqdYh1CqK/97869a98649c97bc1103fdaeff5e4ca3/Blooming_Flowers-Ebano_picture_2.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    className="object-cover w-full h-full"
                    alt="Blooming Flowers"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>
            <ScrollVisibility>
              <HideOnScroll>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-white text-center">
                  <div class="overflow-hidden font-inter text-fluid-m mb-2">
                    <span
                      class="block"
                      style={{
                        opacity: "1",
                        transform: "translateY(100%) translateZ(0)",
                      }}
                    >
                      This is a Print collection
                    </span>
                  </div>
                  <div class="font-ivymode text-fluid-lg leading-none">
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      >
                        Print
                      </span>
                    </div>
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      ></span>
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: "1",
                      transform: "translateY(100%) translateZ(0)",
                    }}
                  >
                    <a href="/fabrics?idCol=print&amp;first=blooming-flowers&amp;second=chinese-garden">
                      <button class="relative overflow-hidden h-auto mt-8 lg:mt-[60px] border border-white rounded-[30px] py-[14px] px-[24px]">
                        <div class="relative overflow-hidden h-[auto] z-[10]">
                          <div
                            class="relative uppercase tk-inter cursor-pointer text-fluid-s text-white leading-[1]"
                            style={{
                              opacity: "1",
                              color: "#ffffff",
                              transform: "none",
                            }}
                          >
                            explore collection
                          </div>
                        </div>
                        <div
                          class="absolute w-full h-[58px] left-0 top-[-100%] z-[1]"
                          style={{
                            background: "rgba(256, 256, 256, 0)",
                            top: "-58px",
                          }}
                        ></div>
                      </button>
                    </a>
                  </div>
                </div>
              </HideOnScroll>
            </ScrollVisibility>
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  class="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/6nzOwKZ7elHbNGrX7BkYxn/ea12e0eb38ae22884926ed51f86993d3/Chinese_Garden-Peonia_picture_2.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    class="w-full h-full object-cover"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>
          </section>

          <div id="section-1"></div>

          <section
            class="flex relative z-[2] justify-between items-center h-[100svh] w-full overflow-hidden"
            style={{ opacity: "0" }}
          >
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  class="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(-20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/2PjIYnSEMzRRCaFLW3eD92/ba3442a112c5d6da788706bed326eed4/Calliope-Vinaccia_picture_1.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    class="object-cover w-full h-full"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>

            <ScrollVisibility>
              <HideOnScroll>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-white text-center">
                  <div class="overflow-hidden font-inter text-fluid-m mb-2">
                    <span
                      class="block"
                      style={{
                        opacity: "1",
                        transform: "translateY(100%) translateZ(0)",
                      }}
                    >
                      Striking, sleek and stylish
                    </span>
                  </div>
                  <div class="font-ivymode text-fluid-lg leading-none">
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      >
                        Velvet
                      </span>
                    </div>
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      >
                        Prints
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: "0",
                      transform: "translateY(100%) translateZ(0)",
                    }}
                  >
                    <a href="/fabrics?idCol=velvet&amp;first=calliope&amp;second=malia">
                      <button class="relative overflow-hidden h-auto mt-8 lg:mt-[60px] border border-white rounded-[30px] py-[14px] px-[24px]">
                        <div class="relative overflow-hidden h-[auto] z-[10]">
                          <div
                            class="relative uppercase tk-inter cursor-pointer text-fluid-s text-white leading-[1]"
                            style={{
                              opacity: "1",
                              color: "#ffffff",
                              transform: "none",
                            }}
                          >
                            explore collection
                          </div>
                        </div>
                        <div
                          class="absolute w-full h-[58px] left-0 top-[-100%] z-[1]"
                          style={{
                            background: "rgba(256, 256, 256, 0)",
                            top: "-58px",
                          }}
                        ></div>
                      </button>
                    </a>
                  </div>
                </div>
              </HideOnScroll>
            </ScrollVisibility>
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  class="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/3SL5dIzE9DVqBO5jyeU8Lt/8e9e62f1ddb85771d813c62215ddebe4/Malia-Lontra_picture_1.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    class="w-full h-full object-cover"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>
          </section>
          <div id="section-2" class="h-[2px]"></div>
          <section
            class="flex relative z-[2] justify-between items-center h-[100svh] w-full overflow-hidden"
            style={{ opacity: "0" }}
          >
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  class="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(-20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/6R15KCpFPOrzTDs84Z3W8i/720216e40efee06a9b647d1fa44cdac7/Acropoli-Rosso_picture_1.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    class="object-cover w-full h-full"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>
            <ScrollVisibility>
              <HideOnScroll>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-white text-center">
                  <div class="overflow-hidden font-inter text-fluid-m mb-2">
                    <span
                      class="block"
                      style={{
                        opacity: "1",
                        transform: "translateY(100%) translateZ(0)",
                      }}
                    >
                      COLOURFUL, GEOMETRICAL AND SOPHISTICATED
                    </span>
                  </div>
                  <div class="font-ivymode text-fluid-lg leading-none">
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      >
                        Ethnic
                      </span>
                    </div>
                    <div class="overflow-hidden">
                      <span
                        class="block"
                        style={{
                          opacity: "1",
                          transform: "translateY(100%) translateZ(0)",
                        }}
                      >
                        Textures
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      opacity: "0",
                      transform: "translateY(100%) translateZ(0)",
                    }}
                  >
                    <a href="/fabrics?idCol=ethnic&amp;first=acropoli&amp;second=dragon-empress">
                      <button class="relative overflow-hidden h-auto mt-8 lg:mt-[60px] border border-white rounded-[30px] py-[14px] px-[24px]">
                        <div class="relative overflow-hidden h-[auto] z-[10]">
                          <div
                            class="relative uppercase tk-inter cursor-pointer text-fluid-s text-white leading-[1]"
                            style={{
                              opacity: "1",
                              color: "#ffffff",
                              transform: "none",
                            }}
                          >
                            explore collection
                          </div>
                        </div>
                        <div
                          class="absolute w-full h-[58px] left-0 top-[-100%] z-[1]"
                          style={{
                            background: "rgba(256, 256, 256, 0)",
                            top: "-58px",
                          }}
                        ></div>
                      </button>
                    </a>
                  </div>
                </div>
              </HideOnScroll>
            </ScrollVisibility>
            <ScrollVisibility>
              <HideOnScroll>
                <div
                  class="md:w-[35vw] flex-none w-[100vw] aspect-square rounded-3xl overflow-hidden"
                  style={{
                    transform: "translateX(0px) rotate(20deg) translateZ(0)",
                  }}
                >
                  <img
                    src="//images.ctfassets.net/dvkqw1qa3v1n/1DnenzXhQFLb5mYwWbpph8/de2614d7a7d22720ddcd9cb3f867d579/Color_Picture_Dragon_Empress-Grigio_Nero_1.jpg?fit=fill&amp;w=1000&amp;h=1000"
                    class="w-full h-full object-cover"
                  />
                </div>
              </HideOnScroll>
            </ScrollVisibility>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
