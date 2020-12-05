import { Box, makeStyles } from "@material-ui/core"
import * as React from "react"
import { InputSearch } from "../base/inputSearch";
import { Tag } from "../components/tag";

const useStyles = makeStyles({
  root: {},
  freeWord: {},
  tags: {},
});

export interface ISearchOption {tags: string[]; word: string};

interface IProps {
  tags: string[];
  searchOption: ISearchOption;
  setSearchOption: React.Dispatch<React.SetStateAction<ISearchOption>>;
}
export const SideBar: React.FC<IProps> = ({searchOption, tags, setSearchOption}) => {
  const classes = useStyles();
  const toggleTag = (tag: string) => {
    if (searchOption.tags.some(it => it === tag)) {
      setSearchOption({...searchOption, ...{tags: searchOption.tags.filter(it => it !== tag)}})
    } else {
      setSearchOption({...searchOption, ...{tags: [...searchOption.tags, tag]}})
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.freeWord}>
        <InputSearch str={searchOption.word} onChange={(word)=>setSearchOption({...searchOption, word})} />
      </Box>
      <Box className={classes.tags}>
        {tags.map(tag =>
          <Tag
            key={tag}
            str={tag}
            isActive={searchOption.tags.some(it => it === tag)}
            onClick={(tag) => toggleTag(tag)}
          />
        )}
      </Box>
    </Box>
  )
}
