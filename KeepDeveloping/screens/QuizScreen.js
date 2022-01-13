import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, StatusBar, Alert, ScrollView } from "react-native";
import QuizButton from "../components/QuizButton";
import { baseColors } from "../styles/colors";
import { saveGame } from "../API/Storage";

const QuizScreen = ({ route, navigation }) => {
  const { questions, title } = route.params;

  const [order, setOrder] = useState(1);
  const [points, setPoints] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [style1, setStyle1] = useState("none");
  const [style2, setStyle2] = useState("none");
  const [style3, setStyle3] = useState("none");
  const [style4, setStyle4] = useState("none");
  const [style5, setStyle5] = useState("none");
  const [orderBtn, setOrderBtn] = useState([]);

  useEffect(() => {
    setOrderBtn(createOrder());
  }, []);

  const correctClick = () => {
    setPoints(points + 1);
  };

  const bumpOrder = async () => {
    if (order < questions.length) {
      setOrder(order + 1);
      setAnswered(false);
    } else if (order === questions.length) {
      //update classification
      let level = 0
      switch(title){
        case "Fácil":
          level = 1
          break
        case "Médio":
          level = 2
          break
        default:
          level = 3
          break
      }
      let sc = await saveGame({score: points, level: level})
      let txt = ""
      if(!sc)
        txt = "Erro ao guardar classificação..."
      Alert.alert(
        "Parabéns!",
        "Conseguiu completar o nosso jogo e teve ao todo " +
          points +
          " Pontos. " + txt,
        [{ text: "OK", onPress: () => navigation.goBack() }]
      );
    }
  };

  const createOrder = () => {
    let randomOrder = [];
    for (let i = 0; i < 4; i++) {
      let random_num = Math.floor(Math.random() * 4);
      while (randomOrder.includes(random_num)) {
        random_num = Math.floor(Math.random() * 4);
      }
      randomOrder.push(random_num);
    }

    return randomOrder;
  };

  const RenderQuestions = () => {
    const buttons = [
      <QuizButton
        answered={answered}
        key={1}
        isWrong={true}
        text={questions[order - 1].wrong_answers[0]}
        pressAction={() => {
          setAnswered(true);
        }}
        value={style1}
        setValue={setStyle1}
      />,
      <QuizButton
        answered={answered}
        key={2}
        isWrong={true}
        text={questions[order - 1].wrong_answers[1]}
        pressAction={() => {
          setAnswered(true);
        }}
        value={style2}
        setValue={setStyle2}
      />,
      <QuizButton
        answered={answered}
        key={3}
        isWrong={true}
        text={questions[order - 1].wrong_answers[2]}
        pressAction={() => {
          setAnswered(true);
        }}
        value={style3}
        setValue={setStyle3}
      />,
      <QuizButton
        answered={answered}
        key={4}
        isWrong={false}
        text={questions[order - 1].answer}
        pressAction={() => {
          if (answered !== true) {
            correctClick();
          }
          setAnswered(true);
        }}
        value={style4}
        setValue={setStyle4}
      />,
    ];

    let components = [];
    for (let i = 0; i < orderBtn.length; i++) {
      const element = orderBtn[i];
      components.push(buttons[element]);
    }

    return <View>{components}</View>;
  };

  const RenderImage = () => {
    if (questions[order - 1].image === "Q1.png") {
      return (
        <Image
          style={styles.imageDimension}
          source={require("../assets/Q1.png")}
        />
      );
    } else if (questions[order - 1].image === "Q2.png") {
      return (
        <Image
          style={styles.imageDimension}
          source={require("../assets/Q2.png")}
        />
      );
    } else if (questions[order - 1].image === "Q3.png") {
      return (
        <Image
          style={styles.imageDimension}
          source={require("../assets/Q3.png")}
        />
      );
    }
    return (
      <Image
        style={styles.imageDimension}
        source={require("../assets/Q3.png")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <ScrollView style={styles.scrollStyle}>
        <View style={{ margin: 16 }}>
          <View style={{ marginBottom: 16, alignSelf: "center" }}>
            <Text style={styles.text}>
              {"P." + order + " " + questions[order - 1].question}
            </Text>
          </View>
          <RenderImage />
          <RenderQuestions />
          <View style={styles.nextButtonContainer}>
            {answered ? (
              <QuizButton
                defaultStyle={true}
                text={"Next >"}
                pressAction={() => {
                  setStyle1("none");
                  setStyle2("none");
                  setStyle3("none");
                  setStyle4("none");
                  bumpOrder();
                  setOrderBtn(createOrder());
                }}
                value={style5}
                setValue={setStyle5}
              />
            ) : null}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColors.primary,
    textAlign: "center",
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: baseColors.secondary,
  },
  nextButtonContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 15,
    flex: 1,
  },
  scrollStyle: {
    paddingTop: StatusBar.paddingTop,
    flex:1,
  },
  imageDimension: {
    width: "100%",
    height: 300,
    borderRadius: 10
  }
});

export default QuizScreen;
