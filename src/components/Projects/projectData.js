import Zmanim from "../../Assets/Projects/ZmanimBot.png";
import boxes from "../../Assets/Projects/boxes.png";
import remote from "../../Assets/Projects/remote.png";
import mosaic from "../../Assets/Projects/mosaic.png";



export const ProjectsData = [
    {
        id: 1,
        imgPath: Zmanim,
        isBlog: false,
        title: "Zmanim WhatsApp Bot",
        description: `Zmanim WhatsApp Bot is a tool built using WhatsApp.js and Puppeteer.
        It retrieves the Zmanim (Jewish prayer times that vary by day and location based on the sun)
        from a website and sends them in a text format through WhatsApp.`,
        ghLink: "https://github.com/sholomperman/zmanim"
    },
    {
        id: 2,
        imgPath: boxes,
        isBlog: false,
        title: "Box Packer Helper",
        description: `Optimize your packing process with our efficient Box Packer Helper! Powered by a MySQL server and NodeJS,
        this web app simplifies warehouse tasks. Easily search for products, discover the perfect box, and input quantities.
        Instantly receive suggestions on box allocation and surplus, streamlining your packing routine. Maximize efficiency`,
        ghLink: "https://github.com/sholomperman/Box_Packer_Helper"
    },
    {
        id: 3,
        imgPath: remote,
        isBlog: false,
        title: "Smart lights Remote (Arduino + Alexa)",
        description: `Elevate your home automation with our Arduino-powered IR Light Control project! Seamlessly integrate non-smart
        lights into your smart home ecosystem using Alexa voice commands. Simply instruct Alexa,
        and watch as your ordinary light responds to infrared signals, transforming it into a smart,
        connected lighting solution. Experience the convenience of unified control and modernize your home effortlessly.`,
        ghLink: "#"
    },
    {
        id: 4,
        imgPath: mosaic,
        isBlog: false,
        title: "Create a Mosaic",
        description: `Mosaic Maker, crafting awesome mosaics in a snap!  Turn your photos into eye-catching mosaics without breaking a sweat.`,
        ghLink: "https://github.com/sholomperman/Mosaic-generator"
    },
]