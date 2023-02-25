import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function HomePage() {

  const explainTextData = [
    {
      icon: <SunIcon className="iconColor w-8 h-8" />,
      title: "Examples",
      elements: ["Explain something to me", "What is the difference between a dog and a cat?", "What is the color of the sun?"],
    },
    {
      icon: <BoltIcon className="iconColor w-8 h-8" />,
      title: "Capabilities",
      elements: ["Explain something to me", "What is the difference between a dog and a cat?", "What is the color of the sun?"],
    },
    {
      icon: <ExclamationTriangleIcon className="iconColor w-8 h-8" />,
      title: "Limitations",
      elements: ["Explain something to me", "What is the difference between a dog and a cat?", "What is the color of the sun?"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-2  text-white h-screen">
      <h1 className="text-4xl font-bold mb-20 ">ChatGPT</h1>
      <div className="flex space-x-3 text-center">
        {explainTextData.map((data) => {
          return (
            <div>
              <div className="flex flex-col items-center justify-center mb-5">
                {data.icon}
                <h2>{data.title}</h2>
              </div>
              <div className="space-y-3">
                {data.elements.map((element) => {
                  return <p className="infoText">{element}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
