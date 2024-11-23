export default function Tabs({children, tabButtons, TabButtonsContainer = "menu"}){
    //const ButtonsContainer = tabButtonsContainer;
    return (
        <>
            <TabButtonsContainer>
                {tabButtons}
            </TabButtonsContainer>
            {children}
        </>
    );
}