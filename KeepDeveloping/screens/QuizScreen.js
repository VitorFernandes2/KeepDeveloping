import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, StatusBar, Alert } from "react-native";
import QuizButton from "../components/QuizButton";
import { baseColors } from "../styles/colors";

const QuizScreen = ({ route, navigation }) => {
  const { questions } = route.params;

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

  const bumpOrder = () => {
    if (order < questions.length) {
      setOrder(order + 1);
      setAnswered(false);
    } else if (order === questions.length) {
      //update classification
      Alert.alert(
        "Parabéns!",
        "Conseguiu completar o nosso jogo e teve ao todo " +
          points +
          " Pontos.",
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
          style={{ maxWidth: "100%", maxHeight: 250, borderRadius: 10 }}
          source={require("../assets/Q1.png")}
        />
      );
    } else if (questions[order - 1].image === "Q2.png") {
      return (
        <Image
          style={{ maxWidth: "100%", maxHeight: 250, borderRadius: 10 }}
          source={require("../assets/Q2.png")}
        />
      );
    } else if (questions[order - 1].image === "Q3.png") {
      return (
        <Image
          style={{ maxWidth: "100%", maxHeight: 250, borderRadius: 10 }}
          source={require("../assets/Q3.png")}
        />
      );
    }
    return (
      <Image
        style={{ maxWidth: "100%", maxHeight: 250, borderRadius: 10 }}
        source={require("../assets/Q3.png")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={baseColors.primary} barStyle="dark-content" />
      <View style={{ marginHorizontal: 16, marginTop: 30 }}>
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
              text={"center"}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: baseColors.primary,
    textAlign: "center",
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
  },
});

export default QuizScreen;
