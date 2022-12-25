import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex5": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "nav_bar1": {
      "callbacks": {
        "onClick": []
      }
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex21": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Div3": {
      "callbacks": {}
    },
    "Flex28": {
      "callbacks": {}
    },
    "Div4": {
      "callbacks": {}
    },
    "Flex32": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Div48": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Div91": {
      "callbacks": {}
    },
    "Div93": {
      "callbacks": {}
    },
    "Flex157": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Div94": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex217": {
      "callbacks": {}
    },
    "Flex216": {
      "callbacks": {}
    },
    "Flex220": {
      "callbacks": {}
    },
    "Flex221": {
      "callbacks": {}
    },
    "Flex222": {
      "callbacks": {}
    },
    "Flex231": {
      "callbacks": {}
    },
    "Flex232": {
      "callbacks": {}
    },
    "Div178": {
      "callbacks": {}
    },
    "Div181": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Div179": {
      "callbacks": {}
    },
    "Div182": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Div180": {
      "callbacks": {}
    },
    "Div183": {
      "callbacks": {}
    },
    "Div184": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex243": {
      "callbacks": {}
    },
    "Div189": {
      "callbacks": {}
    },
    "Flex246": {
      "callbacks": {}
    },
    "Div190": {
      "callbacks": {}
    },
    "Flex245": {
      "callbacks": {}
    },
    "Div188": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Div200": {
      "callbacks": {}
    },
    "Div186": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Div213": {
      "callbacks": {}
    },
    "Flex378": {
      "callbacks": {}
    },
    "Flex376": {
      "callbacks": {}
    },
    "Div278": {
      "callbacks": {}
    },
    "Flex375": {
      "callbacks": {}
    },
    "Flex374": {
      "callbacks": {}
    },
    "Div281": {
      "callbacks": {}
    },
    "Div292": {
      "callbacks": {}
    },
    "Div301": {
      "callbacks": {}
    },
    "Flex386": {
      "callbacks": {}
    },
    "Flex385": {
      "callbacks": {}
    },
    "Div300": {
      "callbacks": {}
    },
    "Div297": {
      "callbacks": {}
    },
    "Div305": {
      "callbacks": {}
    },
    "Flex388": {
      "callbacks": {}
    },
    "Flex387": {
      "callbacks": {}
    },
    "Div304": {
      "callbacks": {}
    },
    "Div298": {
      "callbacks": {}
    },
    "Div307": {
      "callbacks": {}
    },
    "Flex390": {
      "callbacks": {}
    },
    "Flex389": {
      "callbacks": {}
    },
    "Div306": {
      "callbacks": {}
    },
    "Flex377": {
      "callbacks": {}
    },
    "Div293": {
      "callbacks": {}
    },
    "Div294": {
      "callbacks": {}
    },
    "Div299": {
      "callbacks": {}
    },
    "Div295": {
      "callbacks": {}
    },
    "Div302": {
      "callbacks": {}
    },
    "Div296": {
      "callbacks": {}
    },
    "Div303": {
      "callbacks": {}
    },
    "Div96": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Div98": {
      "callbacks": {}
    },
    "Flex207": {
      "callbacks": {}
    },
    "Flex205": {
      "callbacks": {}
    },
    "Div112": {
      "callbacks": {}
    },
    "Flex206": {
      "callbacks": {}
    },
    "Flex210": {
      "callbacks": {}
    },
    "Flex209": {
      "callbacks": {}
    },
    "Div118": {
      "callbacks": {}
    },
    "Flex208": {
      "callbacks": {}
    },
    "Div127": {
      "callbacks": {}
    },
    "Div126": {
      "callbacks": {}
    },
    "Div114": {
      "callbacks": {}
    },
    "Div115": {
      "callbacks": {}
    },
    "Div125": {
      "callbacks": {}
    },
    "Div124": {
      "callbacks": {}
    },
    "Flex213": {
      "callbacks": {}
    },
    "Flex211": {
      "callbacks": {}
    },
    "Div132": {
      "callbacks": {}
    },
    "Flex424": {
      "callbacks": {}
    },
    "Flex422": {
      "callbacks": {}
    },
    "Div454": {
      "callbacks": {}
    },
    "Flex423": {
      "callbacks": {}
    },
    "Div453": {
      "callbacks": {}
    },
    "Flex484": {
      "callbacks": {}
    },
    "Flex482": {
      "callbacks": {}
    },
    "Div462": {
      "callbacks": {}
    },
    "Flex483": {
      "callbacks": {}
    },
    "Div463": {
      "callbacks": {}
    },
    "Flex488": {
      "callbacks": {}
    },
    "Flex486": {
      "callbacks": {}
    },
    "Div466": {
      "callbacks": {}
    },
    "Flex487": {
      "callbacks": {}
    },
    "Div467": {
      "callbacks": {}
    },
    "Flex492": {
      "callbacks": {}
    },
    "Flex490": {
      "callbacks": {}
    },
    "Div470": {
      "callbacks": {}
    },
    "Flex491": {
      "callbacks": {}
    },
    "Div471": {
      "callbacks": {}
    },
    "TextBox5": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": " that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox261": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link12": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link13": {
      "custom": {
        "text": "Book a call",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link14": {
      "custom": {
        "text": "Blog",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link15": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link16": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff019fc559a4200eda62273_Vector.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox257": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "SERVICES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584362e74acfa6b75398_Group%2051.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "• Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox21": {
      "custom": {
        "text": "• Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "• Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "• Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "• Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image19": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843b6409375f7c23f2b_Group%2017.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "• Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef584362e74acfa6b75398_Group%2051.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox39": {
      "custom": {
        "text": " • Web and Mobile App "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": " • Design Strategy "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "• Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "I bring results. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button5": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love  crafting interfaces that delight users and help businesses grow. "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image185": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image184": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox184": {
      "custom": {
        "text": "Words on the street"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox185": {
      "custom": {
        "text": "T E S T I M O N I A L S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5ff6a53da27356854576b920_Group%2058.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox186": {
      "custom": {
        "text": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox187": {
      "custom": {
        "text": "Founder,  Double Bunch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox188": {
      "custom": {
        "text": "John Frankin "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/604788d804dfe4ec1de7bb97_image-1-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "custom": {
        "text": "<"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button9": {
      "custom": {
        "text": ">"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image100": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0c235209438ffca029b_Group%20336.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image99": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0c238e88c2e55fe84cf_Group%20335.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image98": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0ccdbeafadf1a24d34a_Group%20333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image97": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image116": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dc9bcd0f7a437038f60d_image_processing20200129-19798-1k8ponz%201-min%20-%20Copy.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox296": {
      "custom": {
        "text": "Soulful Rebrand"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox297": {
      "custom": {
        "text": "View Project ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox295": {
      "custom": {
        "text": "BRANDING"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image117": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcc78ec31466630c033f_image_processing20200129-19798-1k8ponz%202-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox299": {
      "custom": {
        "text": "Datadash Product design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox300": {
      "custom": {
        "text": "View Project ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox298": {
      "custom": {
        "text": "PRODUCT DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image118": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6077dcf54baced26f174226f_image_processing20200129-19798-1k8ponz%2014-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox301": {
      "custom": {
        "text": "WEB DESIGN"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox302": {
      "custom": {
        "text": "View Project ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox303": {
      "custom": {
        "text": "Maize Website Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox320": {
      "custom": {
        "text": "April 16, 2021 • mins6"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox321": {
      "custom": {
        "text": "Read the article ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox322": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div196": {
      "callbacks": {}
    },
    "TextBox327": {
      "custom": {
        "text": "Read the article ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox328": {
      "custom": {
        "text": "April 16, 2021 •7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox329": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div197": {
      "callbacks": {}
    },
    "TextBox317": {
      "custom": {
        "text": "Read the article ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox318": {
      "custom": {
        "text": "April 16, 2021 5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox319": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div195": {
      "callbacks": {}
    },
    "TextBox342": {
      "custom": {
        "text": "Read the article ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox343": {
      "custom": {
        "text": "April 16, 2021 •7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox344": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div201": {
      "callbacks": {}
    },
    "TextBox309": {
      "custom": {
        "text": "View all ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox310": {
      "custom": {
        "text": "B L O G S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox312": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div212": {
      "callbacks": {}
    },
    "TextBox359": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox360": {
      "custom": {
        "text": "Read the article ➔"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox361": {
      "custom": {
        "text": "April 16, 2021 •5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox502": {
      "custom": {
        "text": "💼 WorkExperience "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div313": {
      "callbacks": {}
    },
    "TextBox508": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox509": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image196": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3a74dfa369ea2e92a_Group%2084.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox510": {
      "custom": {
        "text": "•  April 2019 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image197": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div314": {
      "callbacks": {}
    },
    "Image200": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox517": {
      "custom": {
        "text": "•  April 2016 - 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image201": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab3f70370b7efe8c560_Group%2085.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox518": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox519": {
      "custom": {
        "text": "Information Architect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div315": {
      "callbacks": {}
    },
    "Image202": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox520": {
      "custom": {
        "text": "•  April 2016 - May 2017"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image203": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6087cab33450e64d2fa55138_Group%2086.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox521": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox522": {
      "custom": {
        "text": "UI Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox504": {
      "custom": {
        "text": "📚 Education "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div310": {
      "callbacks": {}
    },
    "Image195": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox505": {
      "custom": {
        "text": "• 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox506": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox507": {
      "custom": {
        "text": "MSc (Human Computer Interaction )"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div311": {
      "callbacks": {}
    },
    "TextBox511": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox512": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox513": {
      "custom": {
        "text": "• 2013-2014"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image198": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div312": {
      "callbacks": {}
    },
    "TextBox514": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox515": {
      "custom": {
        "text": "California State University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox516": {
      "custom": {
        "text": "• 2009-2012"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image199": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox191": {
      "custom": {
        "text": "F A Q"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox192": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox226": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox227": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "📧hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox631": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image278": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078d43538e88cf2a8ff4464_White%20Logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox245": {
      "custom": {
        "text": "Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox244": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox243": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox232": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox233": {
      "custom": {
        "text": "Dribble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox231": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox242": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox241": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox240": {
      "custom": {
        "text": "Service"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox250": {
      "custom": {
        "text": "© All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox623": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image270": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div456": {
      "callbacks": {}
    },
    "TextBox622": {
      "custom": {
        "text": "What is the typical timeline for a project?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image269": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div455": {
      "callbacks": {}
    },
    "Div460": {
      "callbacks": {}
    },
    "Image272": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox625": {
      "custom": {
        "text": "What is your hourly rate?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div461": {
      "callbacks": {}
    },
    "Image273": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox626": {
      "custom": {
        "text": "What if I need help after the project is complete?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div464": {
      "callbacks": {}
    },
    "Image274": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox627": {
      "custom": {
        "text": "What time-zone do you work in?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div465": {
      "callbacks": {}
    },
    "Image275": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox628": {
      "custom": {
        "text": "What metrics do you use to measure success?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox629": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image276": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div468": {
      "callbacks": {}
    },
    "TextBox630": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image277": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div469": {
      "callbacks": {}
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
