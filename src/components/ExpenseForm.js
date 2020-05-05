import React from 'react'

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        const note = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /><br />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    /><br />
                    <textarea
                        placeholder="Add a note for your expense (Optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}>

                    </textarea><br />
                    <button>Addd Expense</button>
                </form>
            </div>
        )
    }
}