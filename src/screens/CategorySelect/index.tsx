import React from 'react'
import { FlatList } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Button } from '../../components/Forms/Button'
import { Header } from '../../components/Header'
import { categories } from '../../utils/categories'
import { Category, Container, Icon, Name, Separator,Footer } from './styles'


interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
} : Props ){

  function handleCategorySelect(item: Category){
    setCategory(item);
  }

  const CategorySelectHoc = gestureHandlerRootHOC(()=> (
    <Container>
      <Header title="Categorias"/>

      <FlatList
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item)=>item.key}
        ItemSeparatorComponent={()=> <Separator/>}
        renderItem ={({item})=>(
          <Category
            isActive={category.key === item.key}
            onPress={()=> handleCategorySelect(item)}
          >
            <Icon name={item.icon}/>
            <Name>{item.name}</Name>
          </Category>
        )}
      />
    <Footer>
    <Button
      onPress={closeSelectCategory}
      title="Selecionar"/>
    </Footer>
    </Container>
  ));
  
 return <CategorySelectHoc/>
}