import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./audio1.module.css";

type Audio1Type = {
  /** Style props */
  audioWidth?: CSSProperties["width"];
  audioHeight?: CSSProperties["height"];
  rectangleDivBorderRadius?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius1?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius2?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius3?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius4?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius5?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius6?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius7?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius8?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius9?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius10?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius11?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius12?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius13?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius14?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius15?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius16?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius17?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius18?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius19?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius20?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius21?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius22?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius23?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius24?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius25?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius26?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius27?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius28?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius29?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius30?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius31?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius32?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius33?: CSSProperties["borderRadius"];
  rectangleDivRight?: CSSProperties["right"];
  rectangleDivBorderRadius34?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius35?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius36?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius37?: CSSProperties["borderRadius"];
  rectangleDivLeft?: CSSProperties["left"];
  rectangleDivBorderRadius38?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius39?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius40?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius41?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius42?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius43?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius44?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius45?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius46?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius47?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius48?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius49?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius50?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius51?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius52?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius53?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius54?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius55?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius56?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius57?: CSSProperties["borderRadius"];
  rectangleDivLeft1?: CSSProperties["left"];
  rectangleDivBorderRadius58?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius59?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius60?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius61?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius62?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius63?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius64?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius65?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius66?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius67?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius68?: CSSProperties["borderRadius"];
  rectangleDivLeft2?: CSSProperties["left"];
  rectangleDivBorderRadius69?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius70?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius71?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius72?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius73?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius74?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius75?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius76?: CSSProperties["borderRadius"];
  rectangleDivRight1?: CSSProperties["right"];
  rectangleDivBorderRadius77?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius78?: CSSProperties["borderRadius"];
  rectangleDivLeft3?: CSSProperties["left"];
  rectangleDivBorderRadius79?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius80?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius81?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius82?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius83?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius84?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius85?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius86?: CSSProperties["borderRadius"];
  rectangleDivRight2?: CSSProperties["right"];
  rectangleDivBorderRadius87?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius88?: CSSProperties["borderRadius"];
  rectangleDivLeft4?: CSSProperties["left"];
  rectangleDivBorderRadius89?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius90?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius91?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius92?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius93?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius94?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius95?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius96?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius97?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius98?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius99?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius100?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius101?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius102?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius103?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius104?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius105?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius106?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius107?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius108?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius109?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius110?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius111?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius112?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius113?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius114?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius115?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius116?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius117?: CSSProperties["borderRadius"];
  rectangleDivLeft5?: CSSProperties["left"];
  rectangleDivBorderRadius118?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius119?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius120?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius121?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius122?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius123?: CSSProperties["borderRadius"];
  rectangleDivRight3?: CSSProperties["right"];
  rectangleDivBorderRadius124?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius125?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius126?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius127?: CSSProperties["borderRadius"];
  rectangleDivLeft6?: CSSProperties["left"];
  rectangleDivBorderRadius128?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius129?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius130?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius131?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius132?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius133?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius134?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius135?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius136?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius137?: CSSProperties["borderRadius"];
  rectangleDivLeft7?: CSSProperties["left"];
  rectangleDivBorderRadius138?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius139?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius140?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius141?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius142?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius143?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius144?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius145?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius146?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius147?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius148?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius149?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius150?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius151?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius152?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius153?: CSSProperties["borderRadius"];
  rectangleDivRight4?: CSSProperties["right"];
  rectangleDivBorderRadius154?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius155?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius156?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius157?: CSSProperties["borderRadius"];
  rectangleDivLeft8?: CSSProperties["left"];
  rectangleDivBorderRadius158?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius159?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius160?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius161?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius162?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius163?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius164?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius165?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius166?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius167?: CSSProperties["borderRadius"];
  rectangleDivBorderRadius168?: CSSProperties["borderRadius"];
  rectangleDivLeft9?: CSSProperties["left"];
  rectangleDivBorderRadius169?: CSSProperties["borderRadius"];
};

const Audio1: NextPage<Audio1Type> = ({
  audioWidth,
  audioHeight,
  rectangleDivBorderRadius,
  rectangleDivBorderRadius1,
  rectangleDivBorderRadius2,
  rectangleDivBorderRadius3,
  rectangleDivBorderRadius4,
  rectangleDivBorderRadius5,
  rectangleDivBorderRadius6,
  rectangleDivBorderRadius7,
  rectangleDivBorderRadius8,
  rectangleDivBorderRadius9,
  rectangleDivBorderRadius10,
  rectangleDivBorderRadius11,
  rectangleDivBorderRadius12,
  rectangleDivBorderRadius13,
  rectangleDivBorderRadius14,
  rectangleDivBorderRadius15,
  rectangleDivBorderRadius16,
  rectangleDivBorderRadius17,
  rectangleDivBorderRadius18,
  rectangleDivBorderRadius19,
  rectangleDivBorderRadius20,
  rectangleDivBorderRadius21,
  rectangleDivBorderRadius22,
  rectangleDivBorderRadius23,
  rectangleDivBorderRadius24,
  rectangleDivBorderRadius25,
  rectangleDivBorderRadius26,
  rectangleDivBorderRadius27,
  rectangleDivBorderRadius28,
  rectangleDivBorderRadius29,
  rectangleDivBorderRadius30,
  rectangleDivBorderRadius31,
  rectangleDivBorderRadius32,
  rectangleDivBorderRadius33,
  rectangleDivRight,
  rectangleDivBorderRadius34,
  rectangleDivBorderRadius35,
  rectangleDivBorderRadius36,
  rectangleDivBorderRadius37,
  rectangleDivLeft,
  rectangleDivBorderRadius38,
  rectangleDivBorderRadius39,
  rectangleDivBorderRadius40,
  rectangleDivBorderRadius41,
  rectangleDivBorderRadius42,
  rectangleDivBorderRadius43,
  rectangleDivBorderRadius44,
  rectangleDivBorderRadius45,
  rectangleDivBorderRadius46,
  rectangleDivBorderRadius47,
  rectangleDivBorderRadius48,
  rectangleDivBorderRadius49,
  rectangleDivBorderRadius50,
  rectangleDivBorderRadius51,
  rectangleDivBorderRadius52,
  rectangleDivBorderRadius53,
  rectangleDivBorderRadius54,
  rectangleDivBorderRadius55,
  rectangleDivBorderRadius56,
  rectangleDivBorderRadius57,
  rectangleDivLeft1,
  rectangleDivBorderRadius58,
  rectangleDivBorderRadius59,
  rectangleDivBorderRadius60,
  rectangleDivBorderRadius61,
  rectangleDivBorderRadius62,
  rectangleDivBorderRadius63,
  rectangleDivBorderRadius64,
  rectangleDivBorderRadius65,
  rectangleDivBorderRadius66,
  rectangleDivBorderRadius67,
  rectangleDivBorderRadius68,
  rectangleDivLeft2,
  rectangleDivBorderRadius69,
  rectangleDivBorderRadius70,
  rectangleDivBorderRadius71,
  rectangleDivBorderRadius72,
  rectangleDivBorderRadius73,
  rectangleDivBorderRadius74,
  rectangleDivBorderRadius75,
  rectangleDivBorderRadius76,
  rectangleDivRight1,
  rectangleDivBorderRadius77,
  rectangleDivBorderRadius78,
  rectangleDivLeft3,
  rectangleDivBorderRadius79,
  rectangleDivBorderRadius80,
  rectangleDivBorderRadius81,
  rectangleDivBorderRadius82,
  rectangleDivBorderRadius83,
  rectangleDivBorderRadius84,
  rectangleDivBorderRadius85,
  rectangleDivBorderRadius86,
  rectangleDivRight2,
  rectangleDivBorderRadius87,
  rectangleDivBorderRadius88,
  rectangleDivLeft4,
  rectangleDivBorderRadius89,
  rectangleDivBorderRadius90,
  rectangleDivBorderRadius91,
  rectangleDivBorderRadius92,
  rectangleDivBorderRadius93,
  rectangleDivBorderRadius94,
  rectangleDivBorderRadius95,
  rectangleDivBorderRadius96,
  rectangleDivBorderRadius97,
  rectangleDivBorderRadius98,
  rectangleDivBorderRadius99,
  rectangleDivBorderRadius100,
  rectangleDivBorderRadius101,
  rectangleDivBorderRadius102,
  rectangleDivBorderRadius103,
  rectangleDivBorderRadius104,
  rectangleDivBorderRadius105,
  rectangleDivBorderRadius106,
  rectangleDivBorderRadius107,
  rectangleDivBorderRadius108,
  rectangleDivBorderRadius109,
  rectangleDivBorderRadius110,
  rectangleDivBorderRadius111,
  rectangleDivBorderRadius112,
  rectangleDivBorderRadius113,
  rectangleDivBorderRadius114,
  rectangleDivBorderRadius115,
  rectangleDivBorderRadius116,
  rectangleDivBorderRadius117,
  rectangleDivLeft5,
  rectangleDivBorderRadius118,
  rectangleDivBorderRadius119,
  rectangleDivBorderRadius120,
  rectangleDivBorderRadius121,
  rectangleDivBorderRadius122,
  rectangleDivBorderRadius123,
  rectangleDivRight3,
  rectangleDivBorderRadius124,
  rectangleDivBorderRadius125,
  rectangleDivBorderRadius126,
  rectangleDivBorderRadius127,
  rectangleDivLeft6,
  rectangleDivBorderRadius128,
  rectangleDivBorderRadius129,
  rectangleDivBorderRadius130,
  rectangleDivBorderRadius131,
  rectangleDivBorderRadius132,
  rectangleDivBorderRadius133,
  rectangleDivBorderRadius134,
  rectangleDivBorderRadius135,
  rectangleDivBorderRadius136,
  rectangleDivBorderRadius137,
  rectangleDivLeft7,
  rectangleDivBorderRadius138,
  rectangleDivBorderRadius139,
  rectangleDivBorderRadius140,
  rectangleDivBorderRadius141,
  rectangleDivBorderRadius142,
  rectangleDivBorderRadius143,
  rectangleDivBorderRadius144,
  rectangleDivBorderRadius145,
  rectangleDivBorderRadius146,
  rectangleDivBorderRadius147,
  rectangleDivBorderRadius148,
  rectangleDivBorderRadius149,
  rectangleDivBorderRadius150,
  rectangleDivBorderRadius151,
  rectangleDivBorderRadius152,
  rectangleDivBorderRadius153,
  rectangleDivRight4,
  rectangleDivBorderRadius154,
  rectangleDivBorderRadius155,
  rectangleDivBorderRadius156,
  rectangleDivBorderRadius157,
  rectangleDivLeft8,
  rectangleDivBorderRadius158,
  rectangleDivBorderRadius159,
  rectangleDivBorderRadius160,
  rectangleDivBorderRadius161,
  rectangleDivBorderRadius162,
  rectangleDivBorderRadius163,
  rectangleDivBorderRadius164,
  rectangleDivBorderRadius165,
  rectangleDivBorderRadius166,
  rectangleDivBorderRadius167,
  rectangleDivBorderRadius168,
  rectangleDivLeft9,
  rectangleDivBorderRadius169,
}) => {
  const audioStyle: CSSProperties = useMemo(() => {
    return {
      width: audioWidth,
      height: audioHeight,
    };
  }, [audioWidth, audioHeight]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius,
    };
  }, [rectangleDivBorderRadius]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius1,
    };
  }, [rectangleDivBorderRadius1]);

  const rectangleDiv2Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius2,
    };
  }, [rectangleDivBorderRadius2]);

  const rectangleDiv3Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius3,
    };
  }, [rectangleDivBorderRadius3]);

  const rectangleDiv4Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius4,
    };
  }, [rectangleDivBorderRadius4]);

  const rectangleDiv5Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius5,
    };
  }, [rectangleDivBorderRadius5]);

  const rectangleDiv6Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius6,
    };
  }, [rectangleDivBorderRadius6]);

  const rectangleDiv7Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius7,
    };
  }, [rectangleDivBorderRadius7]);

  const rectangleDiv8Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius8,
    };
  }, [rectangleDivBorderRadius8]);

  const rectangleDiv9Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius9,
    };
  }, [rectangleDivBorderRadius9]);

  const rectangleDiv10Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius10,
    };
  }, [rectangleDivBorderRadius10]);

  const rectangleDiv11Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius11,
    };
  }, [rectangleDivBorderRadius11]);

  const rectangleDiv12Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius12,
    };
  }, [rectangleDivBorderRadius12]);

  const rectangleDiv13Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius13,
    };
  }, [rectangleDivBorderRadius13]);

  const rectangleDiv14Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius14,
    };
  }, [rectangleDivBorderRadius14]);

  const rectangleDiv15Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius15,
    };
  }, [rectangleDivBorderRadius15]);

  const rectangleDiv16Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius16,
    };
  }, [rectangleDivBorderRadius16]);

  const rectangleDiv17Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius17,
    };
  }, [rectangleDivBorderRadius17]);

  const rectangleDiv18Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius18,
    };
  }, [rectangleDivBorderRadius18]);

  const rectangleDiv19Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius19,
    };
  }, [rectangleDivBorderRadius19]);

  const rectangleDiv20Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius20,
    };
  }, [rectangleDivBorderRadius20]);

  const rectangleDiv21Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius21,
    };
  }, [rectangleDivBorderRadius21]);

  const rectangleDiv22Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius22,
    };
  }, [rectangleDivBorderRadius22]);

  const rectangleDiv23Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius23,
    };
  }, [rectangleDivBorderRadius23]);

  const rectangleDiv24Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius24,
    };
  }, [rectangleDivBorderRadius24]);

  const rectangleDiv25Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius25,
    };
  }, [rectangleDivBorderRadius25]);

  const rectangleDiv26Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius26,
    };
  }, [rectangleDivBorderRadius26]);

  const rectangleDiv27Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius27,
    };
  }, [rectangleDivBorderRadius27]);

  const rectangleDiv28Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius28,
    };
  }, [rectangleDivBorderRadius28]);

  const rectangleDiv29Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius29,
    };
  }, [rectangleDivBorderRadius29]);

  const rectangleDiv30Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius30,
    };
  }, [rectangleDivBorderRadius30]);

  const rectangleDiv31Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius31,
    };
  }, [rectangleDivBorderRadius31]);

  const rectangleDiv32Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius32,
    };
  }, [rectangleDivBorderRadius32]);

  const rectangleDiv33Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius33,
    };
  }, [rectangleDivBorderRadius33]);

  const rectangleDiv34Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight,
      borderRadius: rectangleDivBorderRadius34,
    };
  }, [rectangleDivRight, rectangleDivBorderRadius34]);

  const rectangleDiv35Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius35,
    };
  }, [rectangleDivBorderRadius35]);

  const rectangleDiv36Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius36,
    };
  }, [rectangleDivBorderRadius36]);

  const rectangleDiv37Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius37,
    };
  }, [rectangleDivBorderRadius37]);

  const rectangleDiv38Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft,
      borderRadius: rectangleDivBorderRadius38,
    };
  }, [rectangleDivLeft, rectangleDivBorderRadius38]);

  const rectangleDiv39Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius39,
    };
  }, [rectangleDivBorderRadius39]);

  const rectangleDiv40Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius40,
    };
  }, [rectangleDivBorderRadius40]);

  const rectangleDiv41Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius41,
    };
  }, [rectangleDivBorderRadius41]);

  const rectangleDiv42Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius42,
    };
  }, [rectangleDivBorderRadius42]);

  const rectangleDiv43Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius43,
    };
  }, [rectangleDivBorderRadius43]);

  const rectangleDiv44Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius44,
    };
  }, [rectangleDivBorderRadius44]);

  const rectangleDiv45Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius45,
    };
  }, [rectangleDivBorderRadius45]);

  const rectangleDiv46Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius46,
    };
  }, [rectangleDivBorderRadius46]);

  const rectangleDiv47Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius47,
    };
  }, [rectangleDivBorderRadius47]);

  const rectangleDiv48Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius48,
    };
  }, [rectangleDivBorderRadius48]);

  const rectangleDiv49Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius49,
    };
  }, [rectangleDivBorderRadius49]);

  const rectangleDiv50Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius50,
    };
  }, [rectangleDivBorderRadius50]);

  const rectangleDiv51Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius51,
    };
  }, [rectangleDivBorderRadius51]);

  const rectangleDiv52Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius52,
    };
  }, [rectangleDivBorderRadius52]);

  const rectangleDiv53Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius53,
    };
  }, [rectangleDivBorderRadius53]);

  const rectangleDiv54Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius54,
    };
  }, [rectangleDivBorderRadius54]);

  const rectangleDiv55Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius55,
    };
  }, [rectangleDivBorderRadius55]);

  const rectangleDiv56Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius56,
    };
  }, [rectangleDivBorderRadius56]);

  const rectangleDiv57Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius57,
    };
  }, [rectangleDivBorderRadius57]);

  const rectangleDiv58Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft1,
      borderRadius: rectangleDivBorderRadius58,
    };
  }, [rectangleDivLeft1, rectangleDivBorderRadius58]);

  const rectangleDiv59Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius59,
    };
  }, [rectangleDivBorderRadius59]);

  const rectangleDiv60Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius60,
    };
  }, [rectangleDivBorderRadius60]);

  const rectangleDiv61Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius61,
    };
  }, [rectangleDivBorderRadius61]);

  const rectangleDiv62Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius62,
    };
  }, [rectangleDivBorderRadius62]);

  const rectangleDiv63Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius63,
    };
  }, [rectangleDivBorderRadius63]);

  const rectangleDiv64Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius64,
    };
  }, [rectangleDivBorderRadius64]);

  const rectangleDiv65Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius65,
    };
  }, [rectangleDivBorderRadius65]);

  const rectangleDiv66Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius66,
    };
  }, [rectangleDivBorderRadius66]);

  const rectangleDiv67Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius67,
    };
  }, [rectangleDivBorderRadius67]);

  const rectangleDiv68Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius68,
    };
  }, [rectangleDivBorderRadius68]);

  const rectangleDiv69Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft2,
      borderRadius: rectangleDivBorderRadius69,
    };
  }, [rectangleDivLeft2, rectangleDivBorderRadius69]);

  const rectangleDiv70Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius70,
    };
  }, [rectangleDivBorderRadius70]);

  const rectangleDiv71Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius71,
    };
  }, [rectangleDivBorderRadius71]);

  const rectangleDiv72Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius72,
    };
  }, [rectangleDivBorderRadius72]);

  const rectangleDiv73Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius73,
    };
  }, [rectangleDivBorderRadius73]);

  const rectangleDiv74Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius74,
    };
  }, [rectangleDivBorderRadius74]);

  const rectangleDiv75Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius75,
    };
  }, [rectangleDivBorderRadius75]);

  const rectangleDiv76Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius76,
    };
  }, [rectangleDivBorderRadius76]);

  const rectangleDiv77Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight1,
      borderRadius: rectangleDivBorderRadius77,
    };
  }, [rectangleDivRight1, rectangleDivBorderRadius77]);

  const rectangleDiv78Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius78,
    };
  }, [rectangleDivBorderRadius78]);

  const rectangleDiv79Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft3,
      borderRadius: rectangleDivBorderRadius79,
    };
  }, [rectangleDivLeft3, rectangleDivBorderRadius79]);

  const rectangleDiv80Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius80,
    };
  }, [rectangleDivBorderRadius80]);

  const rectangleDiv81Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius81,
    };
  }, [rectangleDivBorderRadius81]);

  const rectangleDiv82Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius82,
    };
  }, [rectangleDivBorderRadius82]);

  const rectangleDiv83Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius83,
    };
  }, [rectangleDivBorderRadius83]);

  const rectangleDiv84Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius84,
    };
  }, [rectangleDivBorderRadius84]);

  const rectangleDiv85Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius85,
    };
  }, [rectangleDivBorderRadius85]);

  const rectangleDiv86Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius86,
    };
  }, [rectangleDivBorderRadius86]);

  const rectangleDiv87Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight2,
      borderRadius: rectangleDivBorderRadius87,
    };
  }, [rectangleDivRight2, rectangleDivBorderRadius87]);

  const rectangleDiv88Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius88,
    };
  }, [rectangleDivBorderRadius88]);

  const rectangleDiv89Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft4,
      borderRadius: rectangleDivBorderRadius89,
    };
  }, [rectangleDivLeft4, rectangleDivBorderRadius89]);

  const rectangleDiv90Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius90,
    };
  }, [rectangleDivBorderRadius90]);

  const rectangleDiv91Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius91,
    };
  }, [rectangleDivBorderRadius91]);

  const rectangleDiv92Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius92,
    };
  }, [rectangleDivBorderRadius92]);

  const rectangleDiv93Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius93,
    };
  }, [rectangleDivBorderRadius93]);

  const rectangleDiv94Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius94,
    };
  }, [rectangleDivBorderRadius94]);

  const rectangleDiv95Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius95,
    };
  }, [rectangleDivBorderRadius95]);

  const rectangleDiv96Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius96,
    };
  }, [rectangleDivBorderRadius96]);

  const rectangleDiv97Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius97,
    };
  }, [rectangleDivBorderRadius97]);

  const rectangleDiv98Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius98,
    };
  }, [rectangleDivBorderRadius98]);

  const rectangleDiv99Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius99,
    };
  }, [rectangleDivBorderRadius99]);

  const rectangleDiv100Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius100,
    };
  }, [rectangleDivBorderRadius100]);

  const rectangleDiv101Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius101,
    };
  }, [rectangleDivBorderRadius101]);

  const rectangleDiv102Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius102,
    };
  }, [rectangleDivBorderRadius102]);

  const rectangleDiv103Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius103,
    };
  }, [rectangleDivBorderRadius103]);

  const rectangleDiv104Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius104,
    };
  }, [rectangleDivBorderRadius104]);

  const rectangleDiv105Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius105,
    };
  }, [rectangleDivBorderRadius105]);

  const rectangleDiv106Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius106,
    };
  }, [rectangleDivBorderRadius106]);

  const rectangleDiv107Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius107,
    };
  }, [rectangleDivBorderRadius107]);

  const rectangleDiv108Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius108,
    };
  }, [rectangleDivBorderRadius108]);

  const rectangleDiv109Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius109,
    };
  }, [rectangleDivBorderRadius109]);

  const rectangleDiv110Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius110,
    };
  }, [rectangleDivBorderRadius110]);

  const rectangleDiv111Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius111,
    };
  }, [rectangleDivBorderRadius111]);

  const rectangleDiv112Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius112,
    };
  }, [rectangleDivBorderRadius112]);

  const rectangleDiv113Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius113,
    };
  }, [rectangleDivBorderRadius113]);

  const rectangleDiv114Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius114,
    };
  }, [rectangleDivBorderRadius114]);

  const rectangleDiv115Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius115,
    };
  }, [rectangleDivBorderRadius115]);

  const rectangleDiv116Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius116,
    };
  }, [rectangleDivBorderRadius116]);

  const rectangleDiv117Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius117,
    };
  }, [rectangleDivBorderRadius117]);

  const rectangleDiv118Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft5,
      borderRadius: rectangleDivBorderRadius118,
    };
  }, [rectangleDivLeft5, rectangleDivBorderRadius118]);

  const rectangleDiv119Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius119,
    };
  }, [rectangleDivBorderRadius119]);

  const rectangleDiv120Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius120,
    };
  }, [rectangleDivBorderRadius120]);

  const rectangleDiv121Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius121,
    };
  }, [rectangleDivBorderRadius121]);

  const rectangleDiv122Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius122,
    };
  }, [rectangleDivBorderRadius122]);

  const rectangleDiv123Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius123,
    };
  }, [rectangleDivBorderRadius123]);

  const rectangleDiv124Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight3,
      borderRadius: rectangleDivBorderRadius124,
    };
  }, [rectangleDivRight3, rectangleDivBorderRadius124]);

  const rectangleDiv125Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius125,
    };
  }, [rectangleDivBorderRadius125]);

  const rectangleDiv126Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius126,
    };
  }, [rectangleDivBorderRadius126]);

  const rectangleDiv127Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius127,
    };
  }, [rectangleDivBorderRadius127]);

  const rectangleDiv128Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft6,
      borderRadius: rectangleDivBorderRadius128,
    };
  }, [rectangleDivLeft6, rectangleDivBorderRadius128]);

  const rectangleDiv129Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius129,
    };
  }, [rectangleDivBorderRadius129]);

  const rectangleDiv130Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius130,
    };
  }, [rectangleDivBorderRadius130]);

  const rectangleDiv131Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius131,
    };
  }, [rectangleDivBorderRadius131]);

  const rectangleDiv132Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius132,
    };
  }, [rectangleDivBorderRadius132]);

  const rectangleDiv133Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius133,
    };
  }, [rectangleDivBorderRadius133]);

  const rectangleDiv134Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius134,
    };
  }, [rectangleDivBorderRadius134]);

  const rectangleDiv135Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius135,
    };
  }, [rectangleDivBorderRadius135]);

  const rectangleDiv136Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius136,
    };
  }, [rectangleDivBorderRadius136]);

  const rectangleDiv137Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius137,
    };
  }, [rectangleDivBorderRadius137]);

  const rectangleDiv138Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft7,
      borderRadius: rectangleDivBorderRadius138,
    };
  }, [rectangleDivLeft7, rectangleDivBorderRadius138]);

  const rectangleDiv139Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius139,
    };
  }, [rectangleDivBorderRadius139]);

  const rectangleDiv140Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius140,
    };
  }, [rectangleDivBorderRadius140]);

  const rectangleDiv141Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius141,
    };
  }, [rectangleDivBorderRadius141]);

  const rectangleDiv142Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius142,
    };
  }, [rectangleDivBorderRadius142]);

  const rectangleDiv143Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius143,
    };
  }, [rectangleDivBorderRadius143]);

  const rectangleDiv144Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius144,
    };
  }, [rectangleDivBorderRadius144]);

  const rectangleDiv145Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius145,
    };
  }, [rectangleDivBorderRadius145]);

  const rectangleDiv146Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius146,
    };
  }, [rectangleDivBorderRadius146]);

  const rectangleDiv147Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius147,
    };
  }, [rectangleDivBorderRadius147]);

  const rectangleDiv148Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius148,
    };
  }, [rectangleDivBorderRadius148]);

  const rectangleDiv149Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius149,
    };
  }, [rectangleDivBorderRadius149]);

  const rectangleDiv150Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius150,
    };
  }, [rectangleDivBorderRadius150]);

  const rectangleDiv151Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius151,
    };
  }, [rectangleDivBorderRadius151]);

  const rectangleDiv152Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius152,
    };
  }, [rectangleDivBorderRadius152]);

  const rectangleDiv153Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius153,
    };
  }, [rectangleDivBorderRadius153]);

  const rectangleDiv154Style: CSSProperties = useMemo(() => {
    return {
      right: rectangleDivRight4,
      borderRadius: rectangleDivBorderRadius154,
    };
  }, [rectangleDivRight4, rectangleDivBorderRadius154]);

  const rectangleDiv155Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius155,
    };
  }, [rectangleDivBorderRadius155]);

  const rectangleDiv156Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius156,
    };
  }, [rectangleDivBorderRadius156]);

  const rectangleDiv157Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius157,
    };
  }, [rectangleDivBorderRadius157]);

  const rectangleDiv158Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft8,
      borderRadius: rectangleDivBorderRadius158,
    };
  }, [rectangleDivLeft8, rectangleDivBorderRadius158]);

  const rectangleDiv159Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius159,
    };
  }, [rectangleDivBorderRadius159]);

  const rectangleDiv160Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius160,
    };
  }, [rectangleDivBorderRadius160]);

  const rectangleDiv161Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius161,
    };
  }, [rectangleDivBorderRadius161]);

  const rectangleDiv162Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius162,
    };
  }, [rectangleDivBorderRadius162]);

  const rectangleDiv163Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius163,
    };
  }, [rectangleDivBorderRadius163]);

  const rectangleDiv164Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius164,
    };
  }, [rectangleDivBorderRadius164]);

  const rectangleDiv165Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius165,
    };
  }, [rectangleDivBorderRadius165]);

  const rectangleDiv166Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius166,
    };
  }, [rectangleDivBorderRadius166]);

  const rectangleDiv167Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius167,
    };
  }, [rectangleDivBorderRadius167]);

  const rectangleDiv168Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: rectangleDivBorderRadius168,
    };
  }, [rectangleDivBorderRadius168]);

  const rectangleDiv169Style: CSSProperties = useMemo(() => {
    return {
      left: rectangleDivLeft9,
      borderRadius: rectangleDivBorderRadius169,
    };
  }, [rectangleDivLeft9, rectangleDivBorderRadius169]);

  return (
    <div className={styles.audio} style={audioStyle}>
      <div className={styles.div}>
        <div className={styles.child} style={rectangleDivStyle} />
        <div className={styles.item} style={rectangleDiv1Style} />
        <div className={styles.inner} style={rectangleDiv2Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv3Style} />
        <div className={styles.child1} style={rectangleDiv4Style} />
        <div className={styles.child2} style={rectangleDiv5Style} />
        <div className={styles.child3} style={rectangleDiv6Style} />
        <div className={styles.child4} style={rectangleDiv7Style} />
        <div className={styles.child5} style={rectangleDiv8Style} />
        <div className={styles.child6} style={rectangleDiv9Style} />
      </div>
      <div className={styles.div1}>
        <div className={styles.child} style={rectangleDiv10Style} />
        <div className={styles.item} style={rectangleDiv11Style} />
        <div className={styles.inner} style={rectangleDiv12Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv13Style} />
        <div className={styles.child1} style={rectangleDiv14Style} />
        <div className={styles.child2} style={rectangleDiv15Style} />
        <div className={styles.child3} style={rectangleDiv16Style} />
        <div className={styles.child4} style={rectangleDiv17Style} />
        <div className={styles.child5} style={rectangleDiv18Style} />
        <div className={styles.child6} style={rectangleDiv19Style} />
      </div>
      <div className={styles.div2}>
        <div className={styles.child} style={rectangleDiv20Style} />
        <div className={styles.item} style={rectangleDiv21Style} />
        <div className={styles.inner} style={rectangleDiv22Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv23Style} />
        <div className={styles.child1} style={rectangleDiv24Style} />
        <div className={styles.child2} style={rectangleDiv25Style} />
        <div className={styles.child3} style={rectangleDiv26Style} />
        <div className={styles.child4} style={rectangleDiv27Style} />
        <div className={styles.child5} style={rectangleDiv28Style} />
        <div className={styles.child6} style={rectangleDiv29Style} />
      </div>
      <div className={styles.div3}>
        <div className={styles.child} style={rectangleDiv30Style} />
        <div className={styles.item} style={rectangleDiv31Style} />
        <div className={styles.inner} style={rectangleDiv32Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv33Style} />
        <div className={styles.child1} style={rectangleDiv34Style} />
        <div className={styles.child2} style={rectangleDiv35Style} />
        <div className={styles.child3} style={rectangleDiv36Style} />
        <div className={styles.child4} style={rectangleDiv37Style} />
        <div className={styles.child5} style={rectangleDiv38Style} />
        <div className={styles.child6} style={rectangleDiv39Style} />
      </div>
      <div className={styles.div4}>
        <div className={styles.child} style={rectangleDiv40Style} />
        <div className={styles.item} style={rectangleDiv41Style} />
        <div className={styles.inner} style={rectangleDiv42Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv43Style} />
        <div className={styles.child1} style={rectangleDiv44Style} />
        <div className={styles.child2} style={rectangleDiv45Style} />
        <div className={styles.child3} style={rectangleDiv46Style} />
        <div className={styles.child4} style={rectangleDiv47Style} />
        <div className={styles.child5} style={rectangleDiv48Style} />
        <div className={styles.child6} style={rectangleDiv49Style} />
      </div>
      <div className={styles.div5}>
        <div className={styles.child} style={rectangleDiv50Style} />
        <div className={styles.item} style={rectangleDiv51Style} />
        <div className={styles.inner} style={rectangleDiv52Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv53Style} />
        <div className={styles.child1} style={rectangleDiv54Style} />
        <div className={styles.child2} style={rectangleDiv55Style} />
        <div className={styles.child3} style={rectangleDiv56Style} />
        <div className={styles.child4} style={rectangleDiv57Style} />
        <div className={styles.child5} style={rectangleDiv58Style} />
        <div className={styles.child6} style={rectangleDiv59Style} />
      </div>
      <div className={styles.div6}>
        <div className={styles.child} style={rectangleDiv60Style} />
        <div className={styles.item} style={rectangleDiv61Style} />
        <div className={styles.inner} style={rectangleDiv62Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv63Style} />
        <div className={styles.child1} style={rectangleDiv64Style} />
        <div className={styles.child2} style={rectangleDiv65Style} />
        <div className={styles.child3} style={rectangleDiv66Style} />
        <div className={styles.child4} style={rectangleDiv67Style} />
        <div className={styles.child5} style={rectangleDiv68Style} />
        <div className={styles.child6} style={rectangleDiv69Style} />
      </div>
      <div className={styles.div7}>
        <div className={styles.child} style={rectangleDiv70Style} />
        <div className={styles.item} style={rectangleDiv71Style} />
        <div className={styles.inner} style={rectangleDiv72Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv73Style} />
        <div className={styles.child1} style={rectangleDiv74Style} />
        <div className={styles.child2} style={rectangleDiv75Style} />
        <div className={styles.child3} style={rectangleDiv76Style} />
        <div className={styles.child4} style={rectangleDiv77Style} />
        <div className={styles.child5} style={rectangleDiv78Style} />
        <div className={styles.child6} style={rectangleDiv79Style} />
      </div>
      <div className={styles.div8}>
        <div className={styles.child} style={rectangleDiv80Style} />
        <div className={styles.item} style={rectangleDiv81Style} />
        <div className={styles.inner} style={rectangleDiv82Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv83Style} />
        <div className={styles.child1} style={rectangleDiv84Style} />
        <div className={styles.child2} style={rectangleDiv85Style} />
        <div className={styles.child3} style={rectangleDiv86Style} />
        <div className={styles.child4} style={rectangleDiv87Style} />
        <div className={styles.child5} style={rectangleDiv88Style} />
        <div className={styles.child6} style={rectangleDiv89Style} />
      </div>
      <div className={styles.div9}>
        <div className={styles.child} style={rectangleDiv90Style} />
        <div className={styles.item} style={rectangleDiv91Style} />
        <div className={styles.inner} style={rectangleDiv92Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv93Style} />
        <div className={styles.child1} style={rectangleDiv94Style} />
        <div className={styles.child2} style={rectangleDiv95Style} />
        <div className={styles.child3} style={rectangleDiv96Style} />
        <div className={styles.child4} style={rectangleDiv97Style} />
        <div className={styles.child5} style={rectangleDiv98Style} />
        <div className={styles.child6} style={rectangleDiv99Style} />
      </div>
      <div className={styles.div10}>
        <div className={styles.child} style={rectangleDiv100Style} />
        <div className={styles.item} style={rectangleDiv101Style} />
        <div className={styles.inner} style={rectangleDiv102Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv103Style} />
        <div className={styles.child1} style={rectangleDiv104Style} />
        <div className={styles.child2} style={rectangleDiv105Style} />
        <div className={styles.child3} style={rectangleDiv106Style} />
        <div className={styles.child4} style={rectangleDiv107Style} />
        <div className={styles.child5} style={rectangleDiv108Style} />
        <div className={styles.child6} style={rectangleDiv109Style} />
      </div>
      <div className={styles.div11}>
        <div className={styles.child} style={rectangleDiv110Style} />
        <div className={styles.item} style={rectangleDiv111Style} />
        <div className={styles.inner} style={rectangleDiv112Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv113Style} />
        <div className={styles.child1} style={rectangleDiv114Style} />
        <div className={styles.child2} style={rectangleDiv115Style} />
        <div className={styles.child3} style={rectangleDiv116Style} />
        <div className={styles.child4} style={rectangleDiv117Style} />
        <div className={styles.child5} style={rectangleDiv118Style} />
        <div className={styles.child6} style={rectangleDiv119Style} />
      </div>
      <div className={styles.div12}>
        <div className={styles.child} style={rectangleDiv120Style} />
        <div className={styles.item} style={rectangleDiv121Style} />
        <div className={styles.inner} style={rectangleDiv122Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv123Style} />
        <div className={styles.child1} style={rectangleDiv124Style} />
        <div className={styles.child2} style={rectangleDiv125Style} />
        <div className={styles.child3} style={rectangleDiv126Style} />
        <div className={styles.child4} style={rectangleDiv127Style} />
        <div className={styles.child5} style={rectangleDiv128Style} />
        <div className={styles.child6} style={rectangleDiv129Style} />
      </div>
      <div className={styles.div13}>
        <div className={styles.child} style={rectangleDiv130Style} />
        <div className={styles.item} style={rectangleDiv131Style} />
        <div className={styles.inner} style={rectangleDiv132Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv133Style} />
        <div className={styles.child1} style={rectangleDiv134Style} />
        <div className={styles.child2} style={rectangleDiv135Style} />
        <div className={styles.child3} style={rectangleDiv136Style} />
        <div className={styles.child4} style={rectangleDiv137Style} />
        <div className={styles.child5} style={rectangleDiv138Style} />
        <div className={styles.child6} style={rectangleDiv139Style} />
      </div>
      <div className={styles.div14}>
        <div className={styles.child} style={rectangleDiv140Style} />
        <div className={styles.item} style={rectangleDiv141Style} />
        <div className={styles.inner} style={rectangleDiv142Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv143Style} />
        <div className={styles.child1} style={rectangleDiv144Style} />
        <div className={styles.child2} style={rectangleDiv145Style} />
        <div className={styles.child3} style={rectangleDiv146Style} />
        <div className={styles.child4} style={rectangleDiv147Style} />
        <div className={styles.child5} style={rectangleDiv148Style} />
        <div className={styles.child6} style={rectangleDiv149Style} />
      </div>
      <div className={styles.div15}>
        <div className={styles.child} style={rectangleDiv150Style} />
        <div className={styles.item} style={rectangleDiv151Style} />
        <div className={styles.inner} style={rectangleDiv152Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv153Style} />
        <div className={styles.child1} style={rectangleDiv154Style} />
        <div className={styles.child2} style={rectangleDiv155Style} />
        <div className={styles.child3} style={rectangleDiv156Style} />
        <div className={styles.child4} style={rectangleDiv157Style} />
        <div className={styles.child5} style={rectangleDiv158Style} />
        <div className={styles.child6} style={rectangleDiv159Style} />
      </div>
      <div className={styles.div16}>
        <div className={styles.child} style={rectangleDiv160Style} />
        <div className={styles.item} style={rectangleDiv161Style} />
        <div className={styles.inner} style={rectangleDiv162Style} />
        <div className={styles.rectangleDiv} style={rectangleDiv163Style} />
        <div className={styles.child1} style={rectangleDiv164Style} />
        <div className={styles.child2} style={rectangleDiv165Style} />
        <div className={styles.child3} style={rectangleDiv166Style} />
        <div className={styles.child4} style={rectangleDiv167Style} />
        <div className={styles.child5} style={rectangleDiv168Style} />
        <div className={styles.child6} style={rectangleDiv169Style} />
      </div>
    </div>
  );
};

export default Audio1;
