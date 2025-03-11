import Item from './Item'
import styles from './List.module.css'

function List() {
    return (
        <>
            <div className={styles.contentContainer}>
                <h1>Meth Lab Components</h1>
                <ul className={styles.list}>
                    <Item name='Acetone' />
                    <Item name='Anhydrous Ammonia' />
                    <Item name='Brake Cleaner' />
                    <Item name='Brake Fluid' />
                    <Item name='Coffee Filters' />
                    <Item name='Cold Medicine Containing Pseudoephedrine or Ephedrine' />
                    <Item name='Drain Cleaners' />
                    <Item name='Ethyl Ether' />
                    <Item name='Iodine Crystals' />
                    <Item name='Laboratory Glassware' />
                    <Item name='Lighter Fluid' />
                    <Item name='Lithium Metal / Lithium Batteries' />
                    <Item name='Lye' />
                    <Item name='Pool acid / Muriatic acid' />
                    <Item name='Pseudoephedrine and Ephedrine' />
                    <Item name='Red Phosphorus' />
                    <Item name='Sodium Metal' />
                </ul>
            </div>
        </>
    )
}
export default List