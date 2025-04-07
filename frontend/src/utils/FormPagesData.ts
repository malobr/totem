// Reusable icons
/* import normalFace from "@/assets/icons/anamnese/reusable/smile.svg";
import glassesYes from "@/assets/icons/anamnese/dayNightVision/glasses/mouth-sideways-with-glasses.svg";
import glassesNo from "@/assets/icons/anamnese/dayNightVision/glasses/mouth-sideways.svg";
import televisionIcon from "@/assets/icons/anamnese/visionTest/difficulty/televisionIcon.svg"
 */
// GeneralHealth
import happyFace from "@/assets/icons/anamnese/generalHealth/feeling/happy.svg";
import sadFace from "@/assets/icons/anamnese/generalHealth/feeling/sad.svg";
import stressedFace from "@/assets/icons/anamnese/generalHealth/feeling/angry.svg";
import afraidFace from "@/assets/icons/anamnese/generalHealth/feeling/shock.svg";
import anxiousFace from "@/assets/icons/anamnese/generalHealth/feeling/disgust.svg";
import depressiveFace from "@/assets/icons/anamnese/generalHealth/feeling/dissapointed.svg";

import { pageType } from "@/features/multiStepForm/types/formTypes";


// IMAGES

import doubleColorHeader from "@/assets/images/closeFaraway.png"
import green from "@/assets/images/green.png"
import red from "@/assets/images/red.png"
import doubleColor from "@/assets/images/doubleColor.png"

import ishihara12 from "@/assets/ishihara/12.png"


const formPagesData: pageType[] = [
  {
    pageNumber: 0,
    title: "form0_title",
    srcImage: "",
    type: "input",
    nullableValue: null,
    options: [
      {
        id: "form1_1",
        label: "",
        value: "",
        difficulty: 0,
      },
    ],
  },
  
  {
    pageNumber: 1,
    title: "form1_title",
    srcImage: "",
    type: "checkbox",
    nullableValue: null,
    options: [
      {
        id: "form1_1",
        label: "form1_option_1",
        value: "1",
        icon: happyFace,
        difficulty: 0,
      },
      {
        id: "form1_2",
        label: "form1_option_2",
        value: "2",
        icon: sadFace,
        difficulty: 0,
      },
      {
        id: "form1_3",
        label: "form1_option_3",
        value: "3",
        icon: stressedFace,
        difficulty: 0,
      },
      {
        id: "form1_4",
        label: "form1_option_4",
        value: "4",
        icon: afraidFace,
        difficulty: 0,
      },
      {
        id: "form1_5",
        label: "form1_option_5",
        value: "5",
        icon: anxiousFace,
        difficulty: 0,
      },
      {
        id: "form1_6",
        label: "form1_option_6",
        value: "6",
        icon: depressiveFace,
        difficulty: 0,
      },
    ],
  },

  {
    pageNumber: 2,
    title: "form2_title",
    srcImage: doubleColorHeader,
    type: "checkbox",
    nullableValue: "4",
    options: [
      {
        id: "form2_1",
        label: "form2_option_1",
        value: "1",
        icon: doubleColor,
        difficulty: 1,
      },
      {
        id: "form2_2",
        label: "form2_option_2",
        value: "2",
        icon: green,
        difficulty: 1,
      },
      {
        id: "form2_3",
        label: "form2_option_3",
        value: "3",
        icon: red,
        difficulty: 1,
      },
    ],
  },

  {
    pageNumber: 3,
    title: "form3_title",
    srcImage: ishihara12,
    type: "checkbox",
    nullableValue: null,
    options: [
      {
        id: "form3_1",
        label: "form3_option_1",
        value: "1",
        difficulty: 1,
      },
       {
        id: "form3_1",
        label: "form3_option_2",
        value: "2",
        difficulty: 1,
      },
        {
        id: "form3_1",
        label: "form3_option_3",
        value: "3",
        difficulty: 1,
      },
         {
        id: "form3_1",
        label: "form3_option_4",
        value: "4",
        difficulty: 1,
      },
    ],
  },
];

export default formPagesData;
