import styles from "./BurgerLayout.module.css";

export default function BurgerLayout(children) {
  return (
    <>
      <Toolbar clickedMenu={showMenuHandler} />
      <SideDrawer open={state.showSideDrawer} closed={sideDrawerCloseHandler} />
      <main className={styles.Content}>{children}</main>
    </>
  );
}
