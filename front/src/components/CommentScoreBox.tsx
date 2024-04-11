import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useState, useEffect } from "react";

type commentScoreTypes = {
  _id: number;
  count: number;
};

type progressTypes = {
  value: number;
  maxCount: number;
};

const ProgressBar = ({ value, maxCount }: progressTypes) => {
  // Calculate the width of the progress bar as a percentage
  const width = (value / maxCount) * 100;

  return (
    <div
      style={{ width: "100%" }}
      className="relative h-6 rounded-xl bg-zinc-100"
    >
      <div
        style={{ width: `${width}%` }}
        className="absolute right-0 top-0 z-20 h-6  rounded-xl bg-indigo-300"
      />
    </div>
  );
};

export default function CommentScoreBox() {
  const [scoreCount, setScoreCount] = useState<commentScoreTypes[]>([]);
  const [test,setTest] = useState<number | undefined>()

  const getScoreCount = async () => {
    const res = await fetch("http://localhost:4000/v1/comments/report", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDc4NTcyZDdjMjE4YTVkZDY3MTAyYyIsImlhdCI6MTcxMTU2NTE5NSwiZXhwIjoxNzE0MTU3MTk1fQ.20k8OOxivVVwnjcEfdhAd87QbsWF1AA1Kp3M0oA2ak4",
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      setScoreCount(data);
    }
  };

  const caculateTotalCount = () => {
    let sum: number = 0;
    scoreCount.forEach((item) => {
      return (sum = sum + item.count);
    });
    return sum;
  };

  function calculateFinalAverageScore()  {
    // Calculate the sum of products of score and count
    const sumProduct = scoreCount.reduce(
      (acc, item) => acc + item._id * item.count,
      0,
    );

    // Calculate the total count of all scores
    const totalCount = scoreCount.reduce((acc, item) => acc + item.count, 0);

    // Calculate the average score
    const averageScore = sumProduct / totalCount;

   const result =  Math.round(averageScore);

    return result
    
  };
    const finalAverage = calculateFinalAverageScore() || 0
  const maxCount = Math.max(...scoreCount.map((item) => item.count));

  useEffect(() => {
    getScoreCount();
  
  }, []);


  return (
    <div className="h-auto rounded-3xl bg-white p-4 shadow-xl shadow-zinc-300 sm:p-10">
      <h2 className="text-xl text-zinc-500">نظرات مشتریان</h2>
      <div className="mt-8 flex h-12 w-full flex-wrap items-center justify-between rounded-xl bg-yellow-100 px-3 text-sm text-primary-y sm:justify-around sm:text-base">
        <div className="flex gap-x-1 sm:gap-x-5">
        {new Array(finalAverage).fill(0).map((star) => (
            <FaStar key={crypto.randomUUID()} />
          ))}
          {new Array(5 - finalAverage).fill(0).map((star) => (
            <FaRegStar key={crypto.randomUUID()} />
          ))}
        </div>
        <p className="">۴ از ۵</p>
      </div>
      <p className="pt-3 text-center text-sm text-zinc-800">
        مجموع {caculateTotalCount()} بررسی
      </p>
      <ul className="pt-3 [&>*]:pt-2.5">
        {scoreCount?.map((score) => (
          <li
            key={crypto.randomUUID()}
            className="flex items-center  justify-center gap-x-2 sm:gap-x-4"
          >
            <span className="text-sm">{score._id}ستاره</span>

            <ProgressBar value={score.count} maxCount={maxCount} />

            <span className="text-sm">{score.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
