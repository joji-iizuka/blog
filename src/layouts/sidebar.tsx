import { Box, Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import * as React from "react"
import { InputSearch } from "../base/inputSearch";
import { Tag } from "../components/tag";

const useStyles = makeStyles({
  root: {
    width: 240,
  },
  freeWord: {},
  card: {
    marginTop: 32,
    padding: 8,
  },
  tags: {
    padding: '8px 0px',
    display: 'flex',
    flexFlow: 'column',
    '& > div:not(:first-child)': {
      marginTop: 8,
    }
  },
  tag: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  }
});

export interface ISearchOption {tags: string[]; word: string};
export interface ISidebarTab {name: string; count: number};

interface IProps {
  tags: ISidebarTab[];
  searchOption: ISearchOption;
  setSearchOption: React.Dispatch<React.SetStateAction<ISearchOption>>;
}
export const SideBar: React.FC<IProps> = ({searchOption, tags, setSearchOption}) => {
  const classes = useStyles();
  const toggleTag = (tag: string) => {
    if (searchOption.tags.some(it => it === tag)) {
      setSearchOption({...searchOption, ...{tags: searchOption.tags.filter(it => it !== tag)}})
    } else {
      // MEMO:: タグは単一選択
      setSearchOption({...searchOption, ...{tags: [tag]}})
      // MEMO:: タグ複数登録可能にしたい場合に使用する。
      // setSearchOption({...searchOption, ...{tags: [...searchOption.tags, tag]}})
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.freeWord}>
        <InputSearch str={searchOption.word} onChange={(word)=>setSearchOption({...searchOption, word})} />
      </Box>
      <Card className={classes.card}>
        <CardContent className={classes.tags}>
          <Typography component='h3'>Topics</Typography>
          {tags.map(tag =>
              <Box key={tag.name} className={classes.tag}>
                <Tag
                  str={tag.name}
                  isActive={searchOption.tags.some(it => it === tag.name)}
                  onClick={(tag) => toggleTag(tag)}
                />
                <Typography>{tag.count}</Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  )
}
