import React from "react";

export default function Todo({ todo, onStatusChange }){
    return (
        <div className="px-4 py-3 border rounded">
            <div className="d-flex justify-content-between w-100 align-item-center">
                <span>{todo.created_at}</span>
                <div className="d-flex align-items-center mb-2">
                    <button type="button" className="btn btn-outline-success" onClick={() => onStatusChange(todo.id, '2')}>
                        Hoàn Thành
                    </button>
                    <button type="button" className="btn btn-outline-danger" onClick={() => onStatusChange(todo.id, '3')}>
                        Xóa
                    </button>
                </div>
            </div>
            <h3>{todo.content}</h3>
        </div>
    );
}
export const FinishedTodo = ({ todo, onStatusChange }) => {
    return (
        <div className="px-4 py-3 border rounded">
            <div className="d-flex justify-content-between w-100 align-item-center">
                <span>{todo.created_at}</span>
                <div className="d-flex align-items-center mb-2">
                    <button type="button" className="btn btn-outline-danger" onClick={() => onStatusChange(todo.id, '3')}>
                        Xóa
                    </button>
                </div>
            </div>
            <h3>{todo.content}</h3>
        </div>
    );
}
export const CanceledTodo = ({ todo, onStatusChange }) => {
    return (
        <div className="px-4 py-3 border rounded">
            <div className="d-flex justify-content-between w-100 align-item-center">
                <span>{todo.created_at}</span>
                <div className="d-flex align-items-center mb-2">
                    <button type="button" className="btn btn-outline-danger" onClick={() => onStatusChange(todo.id, '1')}>
                        Mới
                    </button>
                </div>
            </div>
            <h3>{todo.content}</h3>
        </div>
    );
}
