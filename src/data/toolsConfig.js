import ColorPickerTool from "../components/tools/ColorPickerTool";
import QRGeneratorTool from "../components/tools/QRGeneratorTool";
import PasswordGeneratorTool from "../components/tools/PasswordGeneratorTool";
import CalculatorTool from "../components/tools/CalculatorTool";
import BMICalculatorTool from "../components/tools/BMICalculatorTool";
import AgeCalculatorTool from "../components/tools/AgeCalculatorTool";
import DiscountCalculatorTool from "../components/tools/DiscountCalculatorTool";
import SpinnerTool from "../components/tools/SpinnerTool";
import FlamesFinderTool from "../components/tools/FlamesFinderTool";
import DiceRollerTool from "../components/tools/DiceRollerTool";
import TextToSpeechTool from "../components/tools/TextToSpeechTool";
import CurrencyConverterTool from "../components/tools/CurrencyConverterTool";
import UrlShortenerTool from "../components/tools/UrlShortenerTool";
import WeatherTool from "../components/tools/WeatherTool";
import EncodeDecodeTool from "../components/tools/EncodeDecodeTool";
import TruthOrDareTool from "../components/tools/TruthOrDareTool";

export const toolsConfig = [
  {
    id: "color-picker",
    name: "Color Picker",
    category: "Design",
    description: "Pick and copy HEX / RGB colors.",
    component: ColorPickerTool,
  },
  {
    id: "qr-generator",
    name: "QR Generator",
    category: "Utility",
    description: "Generate QR codes for any text or URL.",
    component: QRGeneratorTool,
  },
  {
    id: "password-generator",
    name: "Password Generator",
    category: "Security",
    description: "Create strong random passwords.",
    component: PasswordGeneratorTool,
  },
  {
    id: "calculator",
    name: "Calculator",
    category: "Math",
    description: "Do quick manual calculations.",
    component: CalculatorTool,
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    category: "Health",
    description: "Check your Body Mass Index using simple maths.",
    component: BMICalculatorTool,
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    category: "Time",
    description: "Find your exact age in years, months, and days.",
    component: AgeCalculatorTool,
  },
  {
    id: "discount-calculator",
    name: "Discount Calculator",
    category: "Money",
    description: "Calculate final price after discounts.",
    component: DiscountCalculatorTool,
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "Fun",
    description: "Spin and pick a random choice.",
    component: SpinnerTool,
  },
  {
    id: "flames-finder",
    name: "Flames Finder",
    category: "Fun",
    description: "Classic FLAMES game for names.",
    component: FlamesFinderTool,
  },
  {
    id: "dice-roller",
    name: "Dice Roller",
    category: "Fun",
    description: "Roll virtual dice with random outcomes.",
    component: DiceRollerTool,
  },
  {
    id: "text-to-speech",
    name: "Text to Speech",
    category: "Text",
    description: "Convert text into spoken audio.",
    component: TextToSpeechTool,
  },
  {
    id: "currency-converter",
    name: "Currency Converter",
    category: "Finance",
    description: "Convert currencies using live exchange rates.",
    component: CurrencyConverterTool,
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    category: "Web",
    description: "Shorten long URLs using an API.",
    component: UrlShortenerTool,
  },
  {
    id: "weather",
    name: "Weather",
    category: "Utility",
    description: "Check weather for any city using an API.",
    component: WeatherTool,
  },
  {
    id: "encode-decode",
    name: "Encode / Decode Text",
    category: "Text",
    description: "Base64 encode and decode text snippets.",
    component: EncodeDecodeTool,
  },
  {
    id: "truth-or-dare",
    name: "Truth or Dare",
    category: "Fun",
    description: "Get random truths and dares using an API.",
    component: TruthOrDareTool,
  },
];
