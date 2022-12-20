import { useState, useEffect } from 'react';

// LIBRARY
import {
  Box,
  createTheme,
  ImageList,
  ImageListItem,
  useMediaQuery,
} from '@mui/material';

//COMPOENNTS
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';

//DATA
import { dataImg } from './dataImg';

// STYLEDCOMPONENT
import { Flex } from '../ui-component/Flex';
import { Title } from '../ui-component/Title';
import { Section } from '../ui-component/Section';
import {
  FilterWrapp,
  PortfolioFilter,
  FilteDropMenu,
  TitleBox,
  StyledFilterItem,
  PortfolioHoverInfo,
} from './Portfolio.styled';

// IMG
import { IoIosArrowDown } from 'react-icons/io';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 501,
      tablet: 721,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export const Portfolio = () => {
  const [projects, setProjects] = useState(dataImg);
  const [filterResult, setFilterResult] = useState([]);
  const [pickedFilter, setPickedFilter] = useState('all');
  const [filterMenuActive, setFilterMenuActive] = useState(false);
  const [pickedFilterDropdown, setPickedFilterDropdown] = useState('NEWEST');

  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));
  const tablet = useMediaQuery(theme.breakpoints.down('tablet'));

  useEffect(() => {
    filterGallery(pickedFilter);
  }, [pickedFilter]);

  const filterGallery = target => {
    let projectsArr = [...projects];
    let result;

    if (target !== 'all') {
      result = projectsArr.filter(prodject => prodject.tag === target);
    } else {
      result = projectsArr;
    }

    setFilterResult(result);
    setPickedFilter(target);
    setPickedFilterDropdown('NEWEST');
  };

  const filterMenuHover = e => {
    if (e) {
      setFilterMenuActive(true);
    } else {
      setFilterMenuActive(false);
    }
  };

  const filterDropDownHandle = filter => {
    setPickedFilterDropdown(filter);
    setFilterMenuActive(false);

    let projectsArr = [...filterResult];
    let result;

    if (filter === 'NEWEST') {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }
    setFilterResult(result);
  };

  return (
    <Section id="portfolio" padding="20px 0 40px">
      <Container>
        <TitleBox>
          <Title margin="0 0 40px 0">WORK SHOWCASE.</Title>
        </TitleBox>
        <Flex laptop justify="space-between" margin="0 0 70px 0">
          <PortfolioFilter>
            <StyledFilterItem
              background={pickedFilter === 'all'}
              onClick={() => filterGallery('all')}
            >
              ALL
            </StyledFilterItem>
            <StyledFilterItem
              background={pickedFilter === 'branding'}
              onClick={() => filterGallery('branding')}
            >
              BRANDING
            </StyledFilterItem>
            <StyledFilterItem
              background={pickedFilter === 'illustrations'}
              onClick={() => filterGallery('illustrations')}
            >
              ILLUSTRATIONS
            </StyledFilterItem>
            <StyledFilterItem
              background={pickedFilter === 'web'}
              onClick={() => filterGallery('web')}
            >
              WEB
            </StyledFilterItem>
          </PortfolioFilter>
          <FilterWrapp
            onMouseEnter={() => filterMenuHover(true)}
            onMouseLeave={() => {
              filterMenuHover(false);
            }}
          >
            <p>{pickedFilterDropdown} FIRST</p>
            <IoIosArrowDown />

            {filterMenuActive && (
              <FilteDropMenu>
                <li onClick={() => filterDropDownHandle('NEWEST')}>NEWEST</li>
                <li onClick={() => filterDropDownHandle('OLDEST')}>OLDEST</li>
              </FilteDropMenu>
            )}
          </FilterWrapp>
        </Flex>

        <Box>
          <ImageList
            sx={{ mb: 5 }}
            variant="masonry"
            gap={30}
            cols={mobile ? 1 : 2 && tablet ? 2 : 3}
          >
            {filterResult.map(item => (
              <ImageListItem key={item.id}>
                <img
                  src={item.preview}
                  srcSet={item.preview}
                  alt={item.title}
                  loading="lazy"
                />
                <PortfolioHoverInfo>
                  <p>{item.title}</p>
                  <p>{item.tag}</p>
                </PortfolioHoverInfo>
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Flex justify="center">
          <Button
            to="contactForm"
            spy={true}
            smooth={true}
            offset={-370}
            duration={500}
            padding="15px 30px"
          >
            HAVE WORK FOR US?
          </Button>
        </Flex>
      </Container>
    </Section>
  );
};
