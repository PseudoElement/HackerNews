import { Button } from "@mui/material";
import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/types";
import { useLazyGetCommentQuery } from "../../store/api/hackerNews";
import { setAnswers } from "../../store/reducers/answersSlice";

interface IButtonShowAnswersProps {
     kids: number[] | undefined;
     commentId: number;
}

const ButtonShowAnswers: FC<IButtonShowAnswersProps> = ({ kids, commentId }) => {
     const [getAnswer] = useLazyGetCommentQuery();
     const dispatch = useAppDispatch();
     const answers = useAppSelector((state) => state.answersSlice.answers);

     const fetchAnswers = async () => {
          if (kids && kids.length) {
               const response = await Promise.all(kids.map((id) => getAnswer(id)));
               const responseData = response.map(({ data }) => data);
               dispatch(
                    setAnswers({
                         children: responseData,
                         parentId: commentId
                    })
               );
          } else {
               dispatch(setAnswers({ parentId: commentId, children: "No answers." }));
          }
     };

     React.useEffect(() => {
          console.log("ANSWERS", answers);
     }, [answers]);
     return (
          <Button onClick={() => fetchAnswers()} variant="text">
               SHOW ANSWERS
          </Button>
     );
};

export default ButtonShowAnswers;
